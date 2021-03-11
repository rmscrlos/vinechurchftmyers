// action types
import { NAV_TOGGLE } from '../actions/index';

const initialState = {
	navToggle: false,
	sermons: []
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case NAV_TOGGLE: {
			return {
				...state,
				navToggle: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default appReducer;
