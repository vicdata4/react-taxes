import fetch, { http } from '../../utils/fetch.config';

export const getTaxes = () => {
    return async (dispatch) => {
        const response = await fetch(http.get(), '/taxes');
        if (!response.error) {
            dispatch({ type: 'GET_TAXES', payload: response });
        } else {
            dispatch({ type: 'TAXES_ERROR', payload: response.error });
        }
    }
}

export const setFormData = (id) => {
    return async (dispatch) => {
        const response = await fetch(http.get(), `/form?taxesId=${id}`);

        if (!response.error) {
            dispatch({ type: 'SET_FORM_INFO', payload: response[0] });
        } else {
            dispatch({ type: 'TAXES_ERROR', payload: response.error });
        }
    }
}

export const getSubmissions = (id) => {
    return async (dispatch) => {
        const response = await fetch(http.get(), `/submissions?taxId=${id}`);
        if (!response.error) {
            dispatch({ type: 'SET_SUBMISSIONS', payload: response });
        } else {
            dispatch({ type: 'TAXES_ERROR', payload: response.error });
        }
    }
}

export const deleteSubmission = (id) => {
    return async (dispatch) => {
        const response = await fetch(http.delete(), `/submissions/${id}`);

        if (!response.error) {
            alert('Deleted');
            dispatch({ type: 'DELETE_SUBMISSIONS', payload: id });
        } else {
            dispatch({ type: 'TAXES_ERROR', payload: response.error });
        }
    }
}

export const setSelectedSubmission = (item) => {
    return async (dispatch) => {
        dispatch({ type: 'SET_SELECTED_SUBMISSION', payload: item });
    } 
}