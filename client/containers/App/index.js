import React, { Component } from 'react';

import style from './style.css';

class App extends Component {
  render () {
    const { children } = this.props;
    return (
      <div className={ style['app'] }>
        { children }
      </div>
    );
  }
}

export default App;