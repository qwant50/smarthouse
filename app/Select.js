import React from "react";
import Button from "./Button";

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.options[0].value || '?', options: this.props.options};
    }

    onChange(event) {
        this.setState({value: event.target.value});
        console.log('Device has been changed');
    }

    render() {
        const createItem = (item, key) =>
            <option key={key} value={item.value}> {item.name} </option>;
        return (
            <div>
                List of available devices:
                <select onChange={event => this.onChange(event)} value={this.state.value}>
                    {this.state.options.map(createItem)}
                </select>
                <Button onClick={() => console.log(this.state.value)} text="Create" />
            </div>
        )
    }
}