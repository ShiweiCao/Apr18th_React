import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './ContactCard.css'
import ContactMeForm from './ContactMeForm.react'

export default class ContactCard extends Component{
    render(){
        return (
            <div className="container">
                <MuiThemeProvider>
                <Card>
                    <CardHeader
                    title="Contact US"
                    actAsExpander={true}
                    showExpandableButton={true}
                    />                    
                    <CardText expandable={true}>
                            <ContactMeForm/>
                    </CardText>
                </Card>
                </MuiThemeProvider>
            </div>
        )
    }  
}