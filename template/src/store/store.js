import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/index';
import myMiddlewares from './middlewares';

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...myMiddlewares));

const store = createStore(rootReducer, enhancer);

export default store;
