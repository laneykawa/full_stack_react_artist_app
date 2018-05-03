import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtists, removeArtist } from "../../redux/artists"; 

import Artist from "./Artist/";
// import Nav from "../Nav";


class ArtistList extends Component {
    componentDidMount() {
        this.props.getArtists(this.props);
    }

    render() {
        const { data, loading, errMsg, removeArtist } = this.props;
        const artistComponents = data
            .sort((a,b) => a.name.localeCompare(b.name))
            .map((artist, i) => <Artist key={artist._id} removeArtist={removeArtist}{...artist}></Artist>)

        if (loading) {
            return (
                <div>...Loading</div>
            )
        } else if (errMsg) {
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div className="artist">
                    {/* <Nav></Nav> */}
                    {artistComponents}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.artists;
}

export default connect(mapStateToProps, { getArtists, removeArtist })(ArtistList);
