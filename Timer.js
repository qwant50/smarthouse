'use strict';

class Timer extends DeviceCore {
    constructor(name, wifiModule) {
        super(name);
    }

    static getCurrentTime() {
        return (new Date).toString();
    };

    /**
     *  set timer
     *
     * @param delayInMinutes
     * @param callback
     * @returns {number} id's timer
     */
    static setDelay(delayInMinutes, callback) {
        return setTimeout(callback, delayInMinutes * 60 * 1000);
    };
}

