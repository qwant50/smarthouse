'use strict';

class Television extends DeviceCore {
    constructor(name, wifiModule, options) {
        super(name);
        this.options = Object.assign({
            MIN_CHANNEL_NUMBER: 1,
            MAX_CHANNEL_NUMBER: 999,
            MIN_VOLUME_LEVEL: 0,
            MAX_VOLUME_LEVEL: 100
        }, options || {});
        this._channelNumber = this.options.MIN_CHANNEL_NUMBER;
        this.volumeLevel = this.options.MIN_VOLUME_LEVEL;
        this.wifi = wifiModule;
    }

    set wiFiState(state) {
        this.wifi.state = state;
    }

    get wiFiState() {
        return this.wifi.state;
    }

    get channel() {
        return this._channelNumber;
    }

    isChannelValid(channelNumber) {
        if (isNaN(channelNumber)) {
            throw new TypeError('Channel number must be a number');
        }
        if (channelNumber < this.options.MIN_CHANNEL_NUMBER || channelNumber > this.options.MAX_CHANNEL_NUMBER) {
            throw new RangeError('Incorrect channel number. Channel number must be in range from ' +
                this.options.MIN_CHANNEL_NUMBER + ' to ' + this.options.MAX_CHANNEL_NUMBER);
        }
        return true;
    }

    set channel(channelNumber) {
        if (this.isChannelValid(channelNumber)) {
            this._channelNumber = channelNumber;
        }
    };

    setNextChannel() {
        this._channelNumber = this._channelNumber === this.options.MAX_CHANNEL_NUMBER ? this.options.MIN_CHANNEL_NUMBER : this._channelNumber++;
    };

    setPrevChannel() {
        this._channelNumber = this._channelNumber === this.options.MIN_CHANNEL_NUMBER ? this.options.MAX_CHANNEL_NUMBER : this._channelNumber--;
    };
}