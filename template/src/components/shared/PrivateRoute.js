import React, { useState, useEffect } from 'react';

import { Route } from 'react-router-dom';

// import { useSelector } from 'react-redux';

import Main from '../pages/Main';
import Loading from './Loading';

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	//const { token } = useSelector((state) => state.auth);
	const token = false; // for the example

	return (
		<Route
			{...rest}
			render={(routeProps) => {
				return token ? <RouteComponent {...routeProps} /> : !loading && !token ? <Main /> : <Loading />;
			}}
		/>
	);
}
