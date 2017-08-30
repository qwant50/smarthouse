'use strict';
import DeviceCore from "./DeviceCore";

export default class Lamp extends DeviceCore {
    constructor(name, wifiModule, options) {
        super(name);
        this.options = Object.assign({
            MIN_BRIGHT: 0,
            MAX_BRIGHT: 999,
            COLOR: '#FFFFFF',
        }, options || {});
        this._bright = this.options.MIN_BRIGHT;
        this._color = this.options.COLOR;
        this.wifi = wifiModule;
    }

    set wiFiState(state) {
        this.wifi.state = state;
    }

    get wiFiState() {
        return this.wifi.state;
    }

    get color() {
        return this._color;
    }
    set color(newColor) {
        this._color = newColor;
    }

    isBrightValid(bright) {
        if (isNaN(bright)) {
            throw new TypeError('Bright value must be a number');
        }
        if (bright < this.options.MIN_BRIGHT || bright > this.options.MAX_BRIGHT) {
            throw new RangeError('Incorrect bright value. Bright value must be in range from ' +
                this.options.MIN_BRIGHT + ' to ' + this.options.MAX_BRIGHT);
        }
        return true;
    }

    set bright(bright) {
        if (this.isBrightValid(bright)) {
            this._bright = bright;
        }
    };

    increaseBright() {
        this._bright = this._bright === this.options.MAX_BRIGHT ? this.options.MIN_BRIGHT : this._bright++;
    };

    decreaseBright() {
        this._bright = this._bright === this.options.MIN_BRIGHT ? this.options.MAX_BRIGHT : this._bright--;
    };
}