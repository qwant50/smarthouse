'use strict';

function Timer(wifiModule) {
    DeviceCore.apply(this, arguments);
}

Timer.prototype = Object.create(DeviceCore.prototype);
Timer.prototype.constructor = Timer;

Timer.prototype.getCurrentTime = function () {
    return (new Date).toString();
};

/**
 *  set timer
 *
 * @param delayInMinutes
 * @param callback
 * @returns {number} id's timer
 */
Timer.prototype.setDelay = function (delayInMinutes, callback) {
    return setTimeout(callback, delayInMinutes * 60 * 1000);
};
