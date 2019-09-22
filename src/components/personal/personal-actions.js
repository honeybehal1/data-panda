import { getData } from '../../utils/http';

export function getPersonalData(dispatch, personalData) {
    dispatch({ type: 'PERSONAL_DATA_REQUESTED', data: {} });
    return getData(personalData, 'signUp').then(data => {
        dispatch({ type: 'PERSONAL_DATA_FETCHED', data });
        return data;
    });
}