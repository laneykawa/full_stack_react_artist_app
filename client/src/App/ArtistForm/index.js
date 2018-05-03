import React, { Component } from "react";
import FormDisplay from "./FormDisplay";

import { connect } from "react-redux";
import { addArtist } from "../../redux/artists";

class ArtistForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                img: "",
                bio: "",
                bookingCost: ""
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
        event.preventDefault();
        this.props.addArtist(this.state.inputs)
        this.setState(this.initialState);
        this.props.history.push("/artist-list");
    }
    render() {
        const props = {
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            ...this.state
        }
        return (
            <FormDisplay {...props}></FormDisplay>
        )
    }
}

export default connect(null, { addArtist })(ArtistForm);

// addArtist = (artist, dispatch)=> addArtist.apply(null, artist)(dispatch)

// const props = {...actionCreator, ...state, propsAlreadyThere}
