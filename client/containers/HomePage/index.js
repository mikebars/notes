import { v4 } from 'node-uuid';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import style from './style.css';

import Header from '../../components/Header';
import Notecard from '../../components/Notecard';

class HomePage extends Component {
  render () {
    const { notes } = this.props;
    const title = `Notes`;
    return (
      <section className={ style['page'] }>
        <Header title={ title } />
        <Link to={ `/note/${ v4() }` } className={ style['add-new-note'] }>
          { `Add new note...` }
        </Link>
        <section className={ style['notecards'] }>
          { notes.map( note => <Notecard key={ note.id } note={ note } /> ) }
        </section>
      </section>
    );
  }
}

function mapStateToProps( state ) {
  return { notes: state.notes };
}

export default connect( mapStateToProps )( HomePage );