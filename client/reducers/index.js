import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import notes from './notes';

export default combineReducers( { routing, notes } );