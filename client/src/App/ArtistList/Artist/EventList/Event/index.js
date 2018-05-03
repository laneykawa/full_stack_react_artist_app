import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    render() {
        const { name, _id, description, date, location, removeEvent } = this.props;
        return (
            <div className="eventSection" >
                <h4>Event Infomation</h4>
                <p>Event Name: {name}</p>
                <p>Date: {date}</p>
                <p>Description: {description}</p>
                <p>Location: {location} </p>
                <button className="button" onClick={() => removeEvent(_id)}>Delete</button>
            </div>
        )
    }
}
export default Event; 