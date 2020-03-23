import { combineReducers } from 'redux';
import reducerName from './reducer';

const rootReducer = combineReducers({
	reducerName //you may want to use reducerName: reducerName,
});

export default rootReducer;
