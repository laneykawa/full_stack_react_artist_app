import React from "react"; 
import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/artist-list/">View Artists</Link>
            <Link className="link" to="/add-artist/">Add Artists</Link>
            <Link className="link" to="/contact/">Contact</Link>
        </div>
    )
}

export default Nav; 