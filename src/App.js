import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


import MainPage from './containers/MainPage/MainPage.react';
import About from './containers/About/About.react';
import Layout from './hoc/Layout/Layout.react';
import ContactCard from './components/ContactMeForm/ContactCard'
import SignIn from './containers/SignIn/SignInForm.react'
import Signup from './containers/Signup/Signup.react'
import ServerInfoTable from './containers/ServerInfoTable/ServerInfoTable'
import AdminView from './containers/AdminView/AdminView'

import './App.css';

class App extends Component {

    render() {
      let routes = (
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={MainPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/Signup" component={Signup} />
          <Route path="/ServerInfo" component={ServerInfoTable} />  
          <Route path="/AdminView" component={AdminView} />        
          <Redirect to="/" />

        </Switch>
      );

      return (
        <div>
          <Layout>
            {routes}
          </Layout>

          <ContactCard/>
        </div>
      );

    }
}

export default withRouter(App);
