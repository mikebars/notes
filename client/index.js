import throttle from 'lodash.throttle';
import { Router, Route, Redirect, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import './style.css';

import App from './containers/App';
import HomePage from './containers/HomePage';
import NotePage from './containers/NotePage';

import configureStore from './store';

import { loadState, saveState } from './localStorage';

const initialState = loadState();

const store = configureStore( initialState );

// throttle saving state to localStorage for performance
store.subscribe( throttle( () => {
  const notes = store.getState().notes;
  return saveState( { notes } );
} ), 1000 );

const history = syncHistoryWithStore( hashHistory, store );

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRedirect to='/home'/>
        <Route path='/home' component={ HomePage }/>
        <Route path='/note/:id' component={ NotePage }/>
        <Redirect from='*' to='home'/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);

if ( process.env.NODE_ENV === 'development' ) {
  const { showDevTools } = require('./containers/DevTools');
  showDevTools( store );
}