import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';


import MainPage from './containers/MainPage/MainPage.react';
import About from './containers/About/About.react';
import Layout from './hoc/Layout/Layout.react';

import './App.css';

class App extends Component {

    render() {
      let routes = (
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      );

      return (
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>
      );

    }
}

export default withRouter(App);
