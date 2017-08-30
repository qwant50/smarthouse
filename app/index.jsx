'use strict';

import SmartHouse from "./SmartHouse";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import {createStore} from "redux";
import App from "./App";


// set delay 1 min
/*Timer.setDelay(1, () => {
 television.state = 'off';
 alert('TV has been taken off after 1 minute. Current state is: ' + television.state);
 });*/

let smartHouse = new SmartHouse();
smartHouse.create('Television', 'Kitchen TV');
smartHouse.create('Television', 'Dining room TV');
smartHouse.create('Television');
smartHouse.create('Lamp', 'Bedside lamp');
smartHouse.create('WiFi', 'WiFi of my neighborn', 'on');
//let allDevices = smartHouse.getDevicesAll();

ReactDOM.render(<App smartHouse={smartHouse}/>, document.getElementById("available-devices"), () => console.log("Список добавлен"));
