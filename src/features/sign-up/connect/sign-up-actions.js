import { postData } from '../../../utils/general-imports';

export function signUp(dispatch, signUp) {
    dispatch({ type: 'SIGN_UP_REQUESTED', data: 'data' });

    postData(signUp).then(data => {
        dispatch({ type: 'SIGN_UP_RESPONDED', data });
        data = JSON.stringify(data);
        return data;
    });

}