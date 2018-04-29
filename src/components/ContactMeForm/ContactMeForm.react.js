import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange500, blue500, red500, grey400, blue200, blue100} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import "./ContactMeForm.css"

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
        };
    }
    
    onChange = (event) => {
        switch(event.target.name){
            case "name":{
                this.setState({name : event.target.value});break;
            }
            case "email":{
                this.setState({email : event.target.value});break;
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
                <div className="container">
                    <ul>We are not avalible right now,but please leave us a message</ul>

                    <form>
                        <ul>
                            <TextField name="name" onChange={this.onChange} value={this.state.name} floatingLabelText="Your Name" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <ul>
                            <TextField name="email" onChange={this.onChange} value={this.state.email} floatingLabelText="Your email" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <ul>
                            <TextField name="comments" onChange={this.onChange} value={this.state.comments} floatingLabelText="Question, comments etc. " multiLine="true" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                        </ul>
                        <FlatButton onClick={this.onClick} primary="true" label="Send" fullWidth="true"/>
                    </form>
                </div>
            </MuiThemeProvider >
        );
    }
}
  
