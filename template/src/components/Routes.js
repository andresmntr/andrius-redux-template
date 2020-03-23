import React from 'react';

// Set up all routes in App
import { Route } from 'react-router-dom';

// Importing all routes
import PrivateRoute from './shared/PrivateRoute';
import Main from './pages/Main';
import Data from './pages/Data';

const App = () => {
	return (
		<>
			<PrivateRoute path="/" exact component={Data} />
			<Route path="/main" component={Main} />
		</>
	);
};

export default App;
