import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.css';

class NavBar extends Component {
  handleDelete ( event ) {
    const { handleDelete, id } = this.props;
    return handleDelete( { id } );
  }
  
  render () {
    const { title } = this.props;
    return (
      <nav className={ style['nav'] }>
        <Link to='/home' className={ style['back-home'] }>
          { `⬅` }
        </Link>
        <Link
          to='/home'
          className={ style['delete-note'] }
          onClick={ event => this.handleDelete( event ) }
        >
          { `🗑` }
        </Link>
      </nav>
    );
  }
}

export default NavBar;