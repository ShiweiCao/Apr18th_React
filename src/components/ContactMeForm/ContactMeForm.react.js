import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500, red500, grey400, blue200, blue100} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    errorStyle: {
        color: red500,
    },
    underlineStyle: {
        borderColor: blue500,
    },
    floatingLabelStyle: {
        color: blue500,
    },
    floatingLabelFocusStyle: {
        color: blue100,
    },
}

export default class ContactMeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            comments: "",
            emailerror: "",
        };
    }
    
    onChange = (event) => {
        switch(event.target.name){
            case "name":{
                this.setState({name : event.target.value});break;
            }
            case "email":{
                let regex = /^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$/;
                if(regex.test(event.target.value)){
                    this.setState({email : event.target.value, emailerror: ""});break;
                } else {
                    this.setState({email : event.target.value, emailerror : "Invalid Email Address!"})
                }
                break;
            }
            case "comments":{
                this.setState({comments : event.target.value});break;
            }
        }
    }

    onClick = () => {
        //Do something
    }

    render() {
        return(
            <MuiThemeProvider>
                        <ul>We are not avalible right now,but please leave us a message</ul>

                        <ul>
                            <TextField name="name" onChange={this.onChange} value={this.state.name} floatingLabelText="Your Name" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <ul>
                            <TextField name="email" onChange={this.onChange} value={this.state.email} errorText={this.state.emailerror} floatingLabelText="Your email" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <ul>
                            <TextField name="comments" onChange={this.onChange} value={this.state.comments} floatingLabelText="Question, comments etc. " multiLine="true" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <FlatButton onClick={this.onClick} primary={true} label="Send" fullWidth={true}/>
            </MuiThemeProvider >
        );
    }
}
  
