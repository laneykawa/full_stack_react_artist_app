import React, { Component } from "react";

import { connect } from "react-redux";
import { getEvents, removeEvent } from "../../../../redux/events";

import Event from "./Event";

class EventList extends Component {
    componentDidMount() {
        this.props.getEvents(this.props);
    }

    render() {
        const { data, loading, errMsg, removeEvent, getEvents } = this.props;
        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            const eventComponents = data
                .filter(event => event.artistId.includes(this.props.artistId))
                .map((event, i) => <Event key={event._id} getEvents={getEvents} data={data} removeEvent={removeEvent}{...event}></Event>)
            return (
                <div className="event">
                    {eventComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.events;
}

export default connect(mapStateToProps, { getEvents, removeEvent })(EventList);
