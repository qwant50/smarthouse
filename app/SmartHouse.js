'use strict';

import Television from "./Television";
import Lamp from "./Lamp";
import WiFi from "./WiFi";

export default class SmartHouse {
    constructor() {
        this.container = new Map();
        this.listOfAvaibleDevices = ['Television', 'Lamp', 'WiFi'];
    }

    create(typeOfDevice, ...params) {
        let device;
        switch (typeOfDevice) {
            case 'Television':
                device = new Television(params[0], new WiFi(params[0], 'idle', true));
                break;
            case 'Lamp':
                device = new Lamp(params[0], new WiFi(params[0], 'idle', true));
                break;
            case 'WiFi':
                device = new WiFi(...params);
                break;

            default:

        }
        this.container.set(device.id, device);
    }

    getDevicesAll() {
        return this.container;
    }

    getDeviceById(id) {
        return this.container.get(id);
    }

    update(id) {

    }

    deleteDeviceById(id) {
        this.container.delete(id);
    }
}