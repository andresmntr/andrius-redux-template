import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/Routes';
import store from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>{store}</App>
		</Router>
	</Provider>,
	document.getElementById('root')
);
