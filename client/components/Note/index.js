import throttle from 'lodash.throttle';
import React, { Component } from 'react';
import style from './style.css';

class Note extends Component {
  handleFormChange ( event ) {
    const { handleChange, handleDelete, id } = this.props;
    const form = event.target.form;
    const title = form.elements['title'].value;
    const text = form.elements['text'].value;
    
    // don't save empty notes
    if ( !title && !text ) return handleDelete( { id } );
    
    // throttle change handler for performance
    return throttle( handleChange, 1000 )( { id, title, text } );
  }
  
  render () {
    const { note } = this.props;
    return (
      <form onChange={ event => this.handleFormChange( event ) } className={ style['note'] }>
        <input
          name='title'
          className={ style['title'] }
          placeholder='Title'
          defaultValue={ note ? note.title : '' }
        />
        <textarea
          name='text'
          className={ style['text'] }
          placeholder='Note'
          defaultValue={ note ? note.text : '' }
        />
      </form>
    );
  }
}

export default Note;