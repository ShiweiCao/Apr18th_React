import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import json file here 
// var data = require(./data.json)
import './ServerInfo.css'


export default class ServerInfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {id:1, Location:"SJ", Status:"Live"},
                {id:2, Location:"SF", Status:"Live"},
                {id:3, Location:"LA", Status:"Down"},
            ]
        };
    }

    
    render(){
        return(
            <div className="ServerInfo">
                <b>Server Information </b>
                <MuiThemeProvider>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Location</TableHeaderColumn>
                                <TableHeaderColumn>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        
                        <TableBody>
                        {
                            this.state.data.map( (element) => (
                                <TableRow>
                                    <TableRowColumn> {element.id} </TableRowColumn>
                                    <TableRowColumn> {element.Location} </TableRowColumn>
                                    <TableRowColumn> {element.Status} </TableRowColumn>
                                </TableRow>
                            ))
                        }
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
            </div>
        );
    }
}