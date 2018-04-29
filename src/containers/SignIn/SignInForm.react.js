import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './SignInForm.css'
import { RaisedButton } from 'material-ui';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : "",
        };
    }

    onChange = (event) => {
        switch(event.target.name){
            case "username":{
                this.setState({username : event.target.value});break;
            }
            case "password":{
                this.setState({password : event.target.value});break;
            }
        }
    }

    onClick = () => {
        // console.log(this.state.username);
        // console.log(this.state.password);
    }


    
    render(){
        return (
            <div className="main">
                <MuiThemeProvider>
                <h1>CRAZY APRIL</h1>
                <h3>Sign in</h3>
                <TextField name="username" value={this.state.username} onChange={this.onChange} hintText="Input username" floatingLabelText="Username"/><br/>       
                <TextField name="password" value={this.state.password} onChange={this.onChange} hintText="Input Password" floatingLabelText="Password" type="password"/><br/>
                <br/>
                <RaisedButton onClick={this.onClick} primary={true} label="Sign in" fullWidth={true}/>
                </MuiThemeProvider>
            </div>
        )
    }
}
