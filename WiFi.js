'use strict';

class WiFi extends DeviceCore {
    constructor(name, state, DCHPStatus, IP, mask, gateway) {
        super(name);
        this.isDHCPActive = true;
        this.IP = '127.0.0.1';
        this.mask = '255.255.255.0';
        this.gateway = '127.0.0.1';
        this.state = state;
    }

    connect() {

    }

    getData() {

    }

    sendData() {

    }
}