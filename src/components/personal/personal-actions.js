import { getData, postData } from '../../utils/http';

export function getPersonalData(dispatch, personalData) {
    dispatch({ type: 'PERSONAL_DATA_REQUESTED', data: {} });
    return getData(personalData, 'signUp').then(data => {
        dispatch({ type: 'PERSONAL_DATA_FETCHED', data });
        return data;
    });
}

export function savebasicPersonalData(dispatch, personalData) {
    dispatch({ type: 'SAVE_PERSONAL_DATA_REQUESTED', data: {} });
    return postData(personalData, 'userBasicInformation/update').then(data => {
        dispatch({ type: 'PERSONAL_DATA_SAVED', data });
        return data;
    });
}