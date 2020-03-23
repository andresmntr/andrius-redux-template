// import React, { useEffect } from 'react';

// // We need to import connect
// import connect from 'react-redux';

// // We're importing our action function from our actions store
// import { actionFunction } from '../../store/actions/actions';

// const App = (props) => {
// 	/* Since we have added our action function to the object in our
//   connect HOC we can access that function through props */
// 	const onClick = () => props.actionFunction();

// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			{/* we have mapped out the state from our reducer to 
//       our props where we can access it now */}
// 			<button onClick={onClick}>{props.stateIWant}</button>
// 		</div>
// 	);
// };

// const mapStateToProps = (state) => {
// 	return {
// 		stateIWant: state.reducer.stateIWant
// 	};
// };

// /* connect HOC takes in a mapStateToProps function as first object
// and takes in an object that we can add our action functions too so
// that we can dispatch our actions */
// export default connect(mapStateToProps, { actionFunction })(App);