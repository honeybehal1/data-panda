import { Immutable } from '../../../utils/general-imports';
let InitilaData = {
    isUserLoggedIn: false,
    userData: {
        userName: '',
        password: ''
    }
};

InitilaData = Immutable.fromJS(InitilaData)
export default function signUpReducer(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'SIGN_UP_REQUESTED':
            return data.set('signUpRequested', data);
        case 'SIGN_UP_RESPONDED':
            return data.set('isUserLoggedIn', true);
    }
    return state;
}