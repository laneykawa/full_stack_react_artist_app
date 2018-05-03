import React, { Component } from "react";
import EditFormDisplay from "./EditFormDisplay";

import { connect } from "react-redux";
import { editArtist } from "../../../../redux/artists";

class ArtistForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: props.name || "",
                img: props.img || "",
                bio: props.bio || "",
                bookingCost: props.bookingCost || "",
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
        this.props.editArtist(this.props._id, this.state.inputs);
        this.props.toggleDisplay();
    }
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <EditFormDisplay {...props} />
        )
    }
}

export default connect(null, { editArtist })(ArtistForm);