import { Immutable } from '../../../utils/general-imports';
let InitilaData = {
    listOfCountries: [],
    listOfState: [],
    listOfCities: []
};

InitilaData = Immutable.fromJS(InitilaData)
export default function signInReducer(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'SIGN_IN_RESPONDED':
            return state.set('isUserSignedIn', data);
    }
    return state;
}
