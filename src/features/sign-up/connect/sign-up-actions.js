import { postData } from '../../../utils/general-imports';

export function signUp(dispatch, signUp) {
    dispatch({ type: 'SIGN_UP_REQUESTED', data: {} });
    return postData(signUp, 'signUp').then(data => {
        dispatch({ type: 'SIGN_UP_RESPONDED', data: true });
        return data;
    });
}