import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import DevTools from '../containers/DevTools';

import rootReducer from '../reducers';

export default function configureStore ( initialState ) {
  const logger = createLogger();

  const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : DevTools.instrument();
  
  const enhancer = compose(
    applyMiddleware( logger ),
    devTools
  );

  const store = createStore( rootReducer, initialState, enhancer );

  // hot module replacement
  if ( module.hot ) {
    module.hot.accept( '../reducers', () => {
      const nextReducer = require( '../reducers' );
      store.replaceReducer( nextReducer );
    } );
  }

  return store;
}