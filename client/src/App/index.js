import React from "react";

import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav"; 

// Routes
import Home from "./Home";
import Contact from "./Contact";
import ArtistForm from "./ArtistForm"; 
import ArtistList from "./ArtistList";
import Artist from "./ArtistList/Artist";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="flex">
                <Nav className="nav"/>
            </div>
            <div className="content-wrapper">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/artist-list/" component={ArtistList}></Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/artist" component={Artist}></Route>
                    <Route path="/add-artist/" component={ArtistForm}></Route>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App;