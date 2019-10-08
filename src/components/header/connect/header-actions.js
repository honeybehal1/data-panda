

import { postData } from '../../../utils/general-imports';

export function signOut(dispatch, signUp) {
    dispatch({ type: 'SIGN_OUT_REQUESTED', data: {} });
    return postData({}, 'signOut').then(data => {
        dispatch({ type: 'SIGN_OUT_RESPONDED', data });
        return data;
    });
}


export function setValue(dispatch, type, data) {
    dispatch({ [type]: data });
}