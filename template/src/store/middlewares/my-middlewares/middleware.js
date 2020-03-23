// general-middleware
export const middleware = ({ getState, dispatch }) => (next) => (action) => {
	const condition = false; // si no procede usar este middleware para esta accion condicion = true

	if (condition) {
		return next(action);
	}

	//middleware code here
};
