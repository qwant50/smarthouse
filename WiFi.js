'use strict';

function WiFi(name, state, DCHPStatus, IP, mask, gateway) {
    DeviceCore.call(this, name);
    this.isDHCPActive = true;
    this.IP = '127.0.0.1';
    this.mask = '255.255.255.0';
    this.gateway = '127.0.0.1';
    this.setState(state);
}

WiFi.prototype = Object.create(DeviceCore.prototype);
WiFi.prototype.constructor = WiFi;

WiFi.prototype.connect = function () {

};

WiFi.prototype.getData = function () {

};

WiFi.prototype.sendData = function () {

};