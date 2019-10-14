import { Immutable } from '../../../utils/general-imports';
let InitilaData = {
    isUserLoggedIn: false,
    userData: {
        userName: '',
        password: ''
    }
};

InitilaData = Immutable.fromJS(InitilaData)
export default function personalDataReducer(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'PERSONAL_DATA_SAVED':
            return state.set('pesonalBasicIformation', data);
        case 'PERSOBNAL_DATA_FETCHED':
            return state.set('pesonalBasicIformation', data);
    }
    return state;
}