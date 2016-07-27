import R from 'ramda';
import moment from 'moment';
import { handleActions } from 'redux-actions';

import { CHANGE_NOTE, DELETE_NOTE } from '../actions/types';

const initialState = [];

export default handleActions( {
  [ CHANGE_NOTE ] : ( state, action ) => {
    const { payload: { id, title, text } } = action;
    
    // no id is invalid input
    if ( !id ) return state;
    
    // check if note with id exists
    const noteIndex = R.findIndex( R.propEq( 'id', id ) )( state );
    const noteExists = noteIndex > -1;
    
    // create new note
    const newNote = { id, title, text };
    
    // if no existing note concat with existing state
    if ( !noteExists ) return R.concat( [ newNote ], state );
    
    // else, remove original and concat
    return R.concat( [ newNote ], R.remove( noteIndex, 1, state ) );
  },
  [ DELETE_NOTE ] : ( state, action ) => {
    const { payload: { id } } = action;

    // no id is invalid input
    if ( !id ) return state;

    // check if note with id exists
    const noteIndex = R.findIndex( R.propEq( 'id', id ) )( state );
    const noteExists = noteIndex > -1;
    
    if ( !noteExists ) return state;

    return R.remove( noteIndex, 1, state );
  }
}, initialState );