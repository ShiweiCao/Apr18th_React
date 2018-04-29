import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

import Image from '../../images/React-icon.png'
import './About.css';


export default class About extends Component{
    render(){
        return (
            <div className = "aboutcard">
                <MuiThemeProvider>
                <Card>
                    <CardHeader title="Crazy April" subtitle="About This" avatar='url(${Image})'/>
                    <CardText>
                        This is the project we made in Apr.28th Hackthon.
                        <br/>
                        <h3> Team member </h3>
                        <div>    
                            {<Avatar>SC</Avatar>} Shiwei Cao
                            <br/>
                            <br/>
                            {<Avatar>TJ</Avatar>} Tieying Jing
                        </div>
                    </CardText>
                </Card>
                </MuiThemeProvider>
            </div>
        )
    }
    

}

