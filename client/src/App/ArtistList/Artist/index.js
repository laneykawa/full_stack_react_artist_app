import React, { Component } from "react";

import EditForm from "./EditForm/";
import EventForm from "./EventForm";
import EventList from "./EventList";

class ArtistDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
            displayFormEvent: false
        }
    }

    toggleDisplay = () => {
        this.setState(prevState => ({ displayForm: !prevState.displayForm }));
    }

    toggleDisplayEvent = () => {
        this.setState(prevState => ({ displayFormEvent: !prevState.displayFormEvent }));
    }
    render() {
        const { name, _id, img, bookingCost, bio, removeArtist } = this.props;
        return (
            <div className="artistSection" >
                <h1>{name}</h1>
                <div className="artistImgContainer">
                    <img name="artistImg" src={img} alt={name}></img>
                </div>
                <p>{bio}</p>
                <h3>Booking Cost:  ${bookingCost} </h3>
                <button className="button" onClick={() => removeArtist(_id)}>Delete</button>
                <button className="button" onClick={this.toggleDisplay}>Edit</button>
                {
                    this.state.displayForm ? <EditForm toggleDisplay={this.toggleDisplay} {...this.props} /> : null
                }
                <button className="addEventButton" onClick={this.toggleDisplayEvent}>Add Event</button>
                {
                    this.state.displayFormEvent ? <EventForm artistId={_id}toggleDisplayEvent={this.toggleDisplayEvent}{...this.props} /> : null
                }
                <EventList artistId={_id}></EventList>
            </div>
        )
    }
}
export default ArtistDisplay; 