import React from "react";
import Select from "./Select";
import List from "./List";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {smartHouse: this.props.smartHouse};
    }

    render() {
        let listOfDevices = [];
        for (let item of this.state.smartHouse.listOfAvaibleDevices) {
            listOfDevices.push({
                value: item,
                name: item
            });
        }
        return (<div>
            <Select options={listOfDevices}/>
            <List items={this.state.smartHouse.getDevicesAll()}/>
        </div>)
    }
}