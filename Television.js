'use strict';

function Television(wifiModule, options) {
    DeviceCore.apply(this, arguments);
    this.options = Object.assign({
        MIN_CHANNEL_NUMBER : 1,
        MAX_CHANNEL_NUMBER : 999,
        MIN_VOLUME_LEVEL : 0,
        MAX_VOLUME_LEVEL : 100
    }, options || {});
    this._channelNumber = this.options.MIN_CHANNEL_NUMBER;
    this.volumeLevel = this.options.MIN_VOLUME_LEVEL;
    this.wifi = wifiModule;
}

Television.prototype = Object.create(DeviceCore.prototype);
Television.prototype.constructor = Television;

Television.prototype.setWiFiState = function (state) {
    this.wifi.setState(state);
};

Television.prototype.getWiFiState = function () {
    return this.wifi.getState();
};

Television.prototype.getChannel = function () {
    return this._channelNumber;
};

Television.prototype.isChannelValid = function (channelNumber) {
    if (isNaN(channelNumber)) {
        throw new TypeError('Channel number must be a number');
    }
    if (channelNumber < this.options.MIN_CHANNEL_NUMBER || channelNumber > this.options.MAX_CHANNEL_NUMBER){
        throw new RangeError('Incorrect channel number. Channel number must be in range from ' +
            this.options.MIN_CHANNEL_NUMBER + ' to ' + this.options.MAX_CHANNEL_NUMBER);
    }
    return true;
};

Television.prototype.setChannel = function (channelNumber) {
    if (this.isChannelValid(channelNumber)) {
        this._channelNumber = channelNumber;
    }
};

Television.prototype.setNextChannel = function () {
    this._channelNumber = this._channelNumber === this.options.MAX_CHANNEL_NUMBER ? this.options.MIN_CHANNEL_NUMBER : this._channelNumber++;
};

Television.prototype.setPrevChannel = function () {
    this._channelNumber = this._channelNumber === this.options.MIN_CHANNEL_NUMBER ? this.options.MAX_CHANNEL_NUMBER : this._channelNumber--;
};