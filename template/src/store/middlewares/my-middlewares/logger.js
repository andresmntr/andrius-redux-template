export const logger = ({ getState }) => (next) => (action) => {
	console.log('ACTION: ' + action.type, action);

	console.group(`${action.type}`);

	console.group('CURRENT STATE:');
	console.log(getState());
	console.groupEnd();

	next(action);

	console.group('NEXT STATE: ');
	console.log(getState());
	console.groupEnd();
};
