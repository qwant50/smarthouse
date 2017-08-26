'use strict';

import SmartHouse from "./SmartHouse";
import React from "react";
import ReactDOM from "react-dom";


// set delay 1 min
/*Timer.setDelay(1, () => {
 television.state = 'off';
 alert('TV has been taken off after 1 minute. Current state is: ' + television.state);
 });*/

let smartHouse = new SmartHouse();
smartHouse.create('Television', 'Kitchen TV');
smartHouse.create('Television', 'Dining room TV');
smartHouse.create('Television');
smartHouse.create('WiFi', 'WiFi of my neighborn', 'on');
let allDevices = smartHouse.getDevicesAll();
let listOfDevices = '';
for(let item of allDevices.keys()){
    listOfDevices += '' + smartHouse.getDeviceById(item) + '<br>';
}

class ListComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {list : this.props.list };
    }
    render() {
        return <h3> {this.state.list}
            <button type="button">Delete device</button>
        </h3>;
    }
}
ReactDOM.render(<ListComponent list = {listOfDevices}/>, document.getElementById("list-of-devices"), () => console.log("Список добавлен"));
