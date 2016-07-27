import React from 'react';
import ReactDOM from 'react-dom';

import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';

const DevTools = createDevTools( <LogMonitor theme='tomorrow' /> );

export const showDevTools = ( store ) => {
  
  if ( window.devToolsExtension ) return null;
  
  const popup = window.open(null, 'Redux DevTools', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no');
  
  if ( popup ) {
    popup.location.reload();
  
    setTimeout( () => {
      popup.document.write( '<div id="react-devtools-root"></div>' );
      ReactDOM.render(
        <DevTools store={ store } />,
        popup.document.getElementById( 'react-devtools-root' )
      );
    }, 1000 );
  }
  
}

export default DevTools;