import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: this.props.items};
    }

    render() {
        const createItem = (item, key) =>
            <li key={key} value={item.value}> {item.name} </li>;
        return (
            <div>
                List of existing devices:
                <ul>
                    {this.state.options.map(createItem)}
                </ul>
            </div>
        )
    }
}