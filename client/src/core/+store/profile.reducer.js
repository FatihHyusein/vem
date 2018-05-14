export const UPDATE_PROFILE_DATA = 'profile/UPDATE_PROFILE_DATA';

const initialState = {
    organisationId: '5af77b1722f0b21e98798ea1',
    userId: 2,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_DATA:
            const { organisationId, userId } = action.payload;
            return Object.assign({}, state, { organisationId, userId });

        default:
            return state;
    }
};


// ================
// ACTIONS
// ================

export const updateProfileData = ({ organisationId, userId }) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_PROFILE_DATA,
            payload: { organisationId, userId },
        });
    }
};
