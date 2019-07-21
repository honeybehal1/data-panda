import { postData } from '../../../utils/general-imports';

export function getGeoLocationList(dispatch, signUp, type) {
    dispatch({ type, data: [] });

    return postData(signUp).then(data => {
        dispatch({ type, data });
        data = JSON.stringify(data);
        return data;
    });
}
