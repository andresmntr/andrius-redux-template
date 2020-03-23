// this is how a general reducer would look like
import { ACTION_NAME } from '../constants/action-types';

const initialState = [];

const reducerName = (is = initialState, action) => {
	switch (action.type) {
		case ACTION_NAME:
			return action.payload;

		default:
			return is;
	}
};

export default reducerName;
