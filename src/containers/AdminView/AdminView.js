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

export default class ServerInfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name:"John Doe", email:"1234@gmail.com", message:"Contact me ASAP."},
                {name:"Mary Smith", email:"abcd@live.com", message:"Great Product, want to learn more."},
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
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Email</TableHeaderColumn>
                                <TableHeaderColumn>Message</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        
                        <TableBody>
                        {
                            this.state.data.map( (element) => (
                                <TableRow>
                                    <TableRowColumn> {element.name} </TableRowColumn>
                                    <TableRowColumn> {element.email} </TableRowColumn>
                                    <TableRowColumn> {element.message} </TableRowColumn>
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