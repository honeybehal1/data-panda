import { postData } from '../../utils/general-imports';

export function signIn(dispatch, signUp) {
    dispatch({ type: 'SIGN_IN_REQUESTED', data: {} });
    return postData(signUp, 'login').then(data => {
        dispatch({ type: 'SIGN_IN_RESPONDED', data });
        return data;
    });
}