import { getData } from '../../../utils/general-imports';
export const getGeoLocation = {
    type: "getGeoLocation",
    payload: true
};

export const getGeoLocationList = (dispatch, data) => {
    dispatch({ type: data.type });
    return getData(data.data).then((geoLocation) => {
        return dispatch({ type: data.type, data: geoLocation[0].countries })
    });
}