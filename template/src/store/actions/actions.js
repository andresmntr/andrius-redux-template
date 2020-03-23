// this is how a general reducer would look like
import * as actions from '../constants/action-types';

export const actionName = ({ state, feature }) => ({ type: actions.ACTION_NAME, payload: state, meta: { feature } });
