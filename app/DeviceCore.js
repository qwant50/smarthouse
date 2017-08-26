'use strict';
import Helper from "./Helper";

export default class DeviceCore {
    constructor(name) {
        this.availableStates = ['on', 'off', 'idle'];
        this._state = this.availableStates[1];
        this.id = Helper.uuidv4;
        this.name = name || 'Unnamed device';
    }

    toString() {
        return 'Name: ' + this.name + ' ID:' + this.id + ', State: ' + this.state;
    }

    validateState(state) {
        return this.availableStates.indexOf(state) > -1;
    }

    set state(state) {
        state = state.toLowerCase();
        if (this.validateState(state)) {
            this._state = state;
        } else {
            throw new RangeError('Incorrect state. Available states are: ' + this.availableStates.join(','));
        }
    }

    get state() {
        return this._state;
    }
}