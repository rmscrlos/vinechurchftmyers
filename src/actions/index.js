export const NAV_TOGGLE = 'NAV_TOGGLE';

//toggle nav menu toggle to true or false
export const toggle = t => dispatch => {
	dispatch({ type: NAV_TOGGLE, payload: !t });
};
