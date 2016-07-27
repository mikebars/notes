import React, { Component } from 'react';
import style from './style.css';

class Header extends Component {
  render () {
    const { title } = this.props;
    return (
      <header className={ style['header'] }>
        <em className={ style['title'] }>
          { title }
        </em>
      </header>
    );
  }
}

export default Header;