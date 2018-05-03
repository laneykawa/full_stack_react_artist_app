import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/contacts";

class Contact extends Component {
    constructor (props){
        super(props); 
        this.initialState = {
            inputs: {
                name: "", 
                email: "", 
                inquiry: ""
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
        this.props.addContact(this.state.inputs)
        this.setState(this.initialState);
        alert("Thank you for submitting your inquiry! Someone will get back with you shortly.")
    }; 

    render (){
        return (
        <div className="contact">
            <form className="contactForm" onSubmit={this.handleSubmit}>
                <input className="contactInput" name="name" value={this.state.inputs.name} onChange={this.handleChange} placeholder="Name" type="text"/>
                <input className="contactInput" name="email" value={this.state.inputs.email} onChange={this.handleChange} placeholder="email" type="email"/>
                <input className="contactInput" name="inquiry" value={this.state.inputs.inquiry} onChange={this.handleChange} placeholder="inquiry" type="text"/>
                <br/>
                <button className="addButton">Submit</button>
            </form>
        </div>
        )
    }
}

export default connect(null, { addContact })(Contact);