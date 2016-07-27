import R from 'ramda';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './style.css';

import NavBar from '../../components/NavBar';
import Note from '../../components/Note';

import actionCreators from '../../actions/creators';

class NotePage extends Component {
  render () {
    const {
      actions: { changeNote, deleteNote },
      params: { id },
      notes
    } = this.props;
    const note = R.find( R.propEq( 'id', id ), notes );
    return (
      <section className={ style['page'] }>
        <NavBar id={ id } handleDelete={ deleteNote } />
        <Note
          id={ id }
          note={ note }
          handleChange={ changeNote }
          handleDelete={ deleteNote }
        />
      </section>
    );
  }
}

function mapStateToProps( state ) {
  return { notes: state.notes };
}

function mapDispatchToProps ( dispatch ) {
  return {
    actions: bindActionCreators( actionCreators, dispatch )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( NotePage );