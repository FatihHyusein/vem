import { ajax } from "../utils/ajax-requests.util";
import { OrganizationModel } from "../../models/OrganizationModel";

export const GET_ORGANISATIONS_SUCCESS = 'organisations/GET_ORGANISATIONS_SUCCESS';
export const GET_ORGANISATIONS_LOADING = 'organisations/GET_ORGANISATIONS_LOADING';
export const GET_ORGANISATIONS_FAIL = 'organisations/GET_ORGANISATIONS_FAIL';
export const GET_ORGANISATION_BY_ID_SUCCESS = 'organisations/GET_ORGANISATION_BY_ID_SUCCESS';
export const GET_ORGANISATION_BY_ID_LOADING = 'organisations/GET_ORGANISATION_BY_ID_LOADING';
export const GET_ORGANISATION_BY_ID_FAIL = 'organisations/GET_ORGANISATION_BY_ID_FAIL';
export const UPDATE_ORGANISATION_BY_ID_SUCCESS = 'organisations/UPDATE_ORGANISATION_BY_ID_SUCCESS';
export const UPDATE_ORGANISATION_BY_ID_LOADING = 'organisations/UPDATE_ORGANISATION_BY_ID_LOADING';
export const UPDATE_ORGANISATION_BY_ID_FAIL = 'organisations/UPDATE_ORGANISATION_BY_ID_FAIL';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORGANISATIONS_SUCCESS:
            const { organisations } = action.payload;
            return [...organisations];

        case GET_ORGANISATION_BY_ID_SUCCESS:
            const { organisation } = action.payload;
            const organisationClone = [...state];
            const organisationIdx = organisationClone.findIndex(o => o.id === organisation.id);
            organisationIdx > -1 ?
                organisationClone[organisationIdx] = organisation :
                organisationClone.push(organisation);

            return organisationClone;

        case UPDATE_ORGANISATION_BY_ID_SUCCESS:
            const { updatedOrganisation } = action.payload;
            const stateClone = [...state];
            const updatedOrganisationIdx = organisationClone.findIndex(o => o.id === updatedOrganisation.id);
            updatedOrganisationIdx > -1 ?
                organisationClone[updatedOrganisationIdx] = updatedOrganisation :
                organisationClone.push(updatedOrganisation);

            return stateClone;

        default:
            return state;
    }
};


// ================
// ACTIONS
// ================

export const getOrganisationsAsync = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_ORGANISATIONS_LOADING,
            payload: null,
        });

        try {
            let response = await ajax.get({ url: 'organisations' });
            return dispatch({
                type: GET_ORGANISATIONS_SUCCESS,
                payload: { organisations: response.organisations.map(organisationJson => OrganizationModel.fromJson(organisationJson)) }
            })
        }
        catch (e) {
            return dispatch({
                type: GET_ORGANISATIONS_FAIL,
                payload: e
            })
        }
    }
};

export const getOrganisationByIdAsync = ({ id }) => {
    return async (dispatch, getState) => {
        dispatch({
            type: GET_ORGANISATION_BY_ID_LOADING,
            payload: null,
        });

        try {
            let result = await ajax.get({ url: `organisations/${id}` });
            return dispatch({
                type: GET_ORGANISATION_BY_ID_SUCCESS,
                payload: { organisation: result }
            })
        }
        catch (e) {
            return dispatch({
                type: GET_ORGANISATION_BY_ID_FAIL,
                payload: e
            })
        }
    }
};

export const updateOrganisationByIdAsync = ({ id, data }) => {
    return async (dispatch, getState) => {
        dispatch({
            type: UPDATE_ORGANISATION_BY_ID_LOADING,
            payload: data
        });

        try {
            let result = await ajax.put({ url: `organisations/${id}`, data });
            return dispatch({
                type: UPDATE_ORGANISATION_BY_ID_SUCCESS,
                payload: { updatedOrganisation: result }
            })
        }
        catch (e) {
            return dispatch({
                type: UPDATE_ORGANISATION_BY_ID_FAIL,
                payload: e
            })
        }
    }
};
