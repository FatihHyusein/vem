export const GET_ORGANISATIONS = 'organisations/GET_ORGANISATIONS';
export const GET_ORGANISATION_BY_ID = 'organisations/GET_ORGANISATION_BY_ID';
export const UPDATE_PERMISSIONS_BY_ID = 'organisations/UPDATE_ORGANISATION_BY_ID';


const initialState = {
    organisations: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORGANISATIONS:
            return {
                ...state,
                isIncrementing: true
            };

        case GET_ORGANISATION_BY_ID:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            };

        case UPDATE_ORGANISATION_BY_ID:
            return {
                ...state,
                isDecrementing: true
            };

        default:
            return state;
    }
};

export const getOrganisationsAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        dispatch({
            type: INCREMENT
        });
    };
};

export const getOrganisationByIdAsync = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_REQUESTED
        });

        return setTimeout(() => {
            dispatch({
                type: INCREMENT
            });
        }, 3000);
    };
};

export const updateOrganisationByIdAsync = () => {
    return dispatch => {
        dispatch({
            type: DECREMENT_REQUESTED
        });

        dispatch({
            type: DECREMENT
        });
    };
};
