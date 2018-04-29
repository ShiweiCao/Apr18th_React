import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './Signup.css'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : "",
            lname : "",
            web : "",
            email : "",
            pass : "",
        };
    }

    onChange = (event) => {
        switch(event.target.name){
            case "fname" : this.setState({fname : event.target.value});break;
            case "lname" : this.setState({lname : event.target.value});break;
            case "web" : this.setState({web : event.target.value});break;
            case "email" : this.setState({email : event.target.value});break;
            case "pass" : this.setState({pass : event.target.value});break;
        }
    }

    onClick = () => {
        // console.log(this.state.fname,this.state.lname,this.state.web,this.state.email,this.state.pass);
    }

    render(){
        return (
            <div class="signupmain">
            <MuiThemeProvider>
            <h1>CRAZY APRIL</h1>
            <h3>Sign up</h3>
            <TextField name="fname" value={this.state.fname} onChange={this.onChange} hintText="First Name" floatingLabelText="First Name"/><br/> 
            <TextField name="lname" value={this.state.lname} onChange={this.onChange} hintText="Last Name" floatingLabelText="Last Name"/><br/> 
            <TextField name="web" value={this.state.web} onChange={this.onChange} hintText="Website Address" floatingLabelText="Website Address"/><br/>
            <TextField name="email" value={this.state.email} onChange={this.onChange} hintText="Email Address" floatingLabelText="Email Address"/><br/>                  
            <TextField name="pass" value={this.state.pass} onChange={this.onChange} hintText="Password" floatingLabelText="Password" type="password"/><br/>
            <FlatButton onClick={this.onClick} primary="true" label="Sign up" fullWidth="true"/>
            <p> Already have a account? <a href="/signin">sign in</a>here. </p>
            </MuiThemeProvider>
            </div>
        )
    }
}