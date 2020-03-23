// import React, { useEffect } from 'react';

// // These are the two hooks we get from the react redux api
// import { useSelector, useDispatch } from 'react-redux';
// // useSelector replaces the mapStateToProps in our connect HOC
// // useDispatch replaces the object we add our action functions to

// // We're importing our action function from our actions store
// import { actionFunction } from './store/actions/actionFile';

// export default function App() {
// 	// Here we are using useSelector to grab the state we want from our reducer
// 	// This is the convention for setting up your useDispatch every time
// 	const stateIWant = useSelector((state) => state.reducer.stateIWant);
// 	const dispatch = useDispatch();

// 	/* We are passing our action function through our useDispatch so that
//   we can dispatch our action function */
// 	const onClick = () => dispatch(actionFunction());

// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			{/* we no longer need to access stateIWant from props because we gave it
//       it's own variable */}
// 			<button onClick={onClick}>{stateIWant}</button>
// 		</div>
// 	);
// }
