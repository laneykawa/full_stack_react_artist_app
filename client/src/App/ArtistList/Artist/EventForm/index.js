import React, { Component } from "react";
import EventFormDisplay from "./EventFormDisplay";

import { connect } from "react-redux";
import { addEvent } from "../../../../redux/events";

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                description: "",
                location: "",
                date: ""
            },
        }
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    handleSubmit(event) {
        event.persist();
        event.preventDefault();
        this.props.addEvent({...this.state.inputs, artistId: this.props.artistId})
        this.setState(this.initialState);
        this.props.toggleDisplayEvent();
    }
    
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <EventFormDisplay {...props} />
        )
    }
}

export default connect(null, { addEvent })(EventForm);
