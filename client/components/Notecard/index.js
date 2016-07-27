import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style.css';

class Notecard extends Component {
  render () {
    const { note: { id, title, text } } = this.props;
    return (
      <section className={ style['container'] }>
        <Link to={ `note/${ id }` } className={ style['notecard'] }>
          <em className={ style['title'] }>
            { `${ title }` }
          </em>
          <p className={ style['text'] }>
            { `${ text }` }
          </p>
        </Link>
      </section>
    );
  }
}

export default Notecard;