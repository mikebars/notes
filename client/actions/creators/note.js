import { createAction } from 'redux-actions';

import { CHANGE_NOTE, DELETE_NOTE } from '../types';

export const changeNote = createAction( CHANGE_NOTE );

export const deleteNote = createAction( DELETE_NOTE );