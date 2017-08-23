'use strict';

function DeviceCore() {
    this.availableStates = ['on', 'off', 'idle'];
    this._state = this.availableStates[1];
    this.id = Helper.uuidv4();
}

DeviceCore.prototype = {
    constructor: DeviceCore,

    toString: function () {
        return this.id;
    },

    validateState: function (state) {
        return this.availableStates.indexOf(state) > -1;
    },

    setState: function (state) {
        state = state.toLowerCase();
        if (this.validateState(state)) {
            this._state = state;
        } else {
            throw new RangeError('Incorrect state. Available states are: ' + this.availableStates.join(','));
        }
    },

    getState: function () {
        return this._state;
    },

};