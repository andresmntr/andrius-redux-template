import React from 'react';
import './Main.css';

const Main = (store) => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>My react redux template</h1>
				<p>
					<code>nice code</code>
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Happy hacking
				</a>
				{console.log(store.children)}
			</header>
		</div>
	);
};

export default Main;
