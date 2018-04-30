	import React, {Component} from "react";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import { store, history} from './store';
import Header from './components/Header'
import App from './components/App'
import Footer from './components/Footer'

class MainApp extends React.Component{

  
    render(){   
    return(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  </ConnectedRouter>
  </Provider>
)
}}

export default MainApp;
