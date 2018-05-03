import React from "react";
import { Link } from "react-router-dom";

// Screen one what people will see. 

function Home(props) {
    return (
        <div className="homepage">
            <h2>Check out all our featured Artists!</h2>
            <br/>
            <Link to="/artist-list/" className="viewArtistLink">View Artists</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="readable">
                <p className="homeFont">Welcome!</p> 
                <p className="homeFont">Mad Scratch G.O.A.T is a talent agency that specializes in helping DJs ad Hip-Hop artists with branding and marketing.</p>
            </div>
        </div>
    )
}

export default Home;