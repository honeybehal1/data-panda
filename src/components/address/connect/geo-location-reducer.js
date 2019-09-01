import { Immutable } from '../../../utils/general-imports';
let InitilaData = {
    listOfCountries: [],
    listOfState: [],
    listOfCities: []
};

InitilaData = Immutable.fromJS(InitilaData)
export default function geoLocation(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'countries':
            return state.set('listOfCountries', data);
        case 'state':
            return state.set('listOfState', data);
        case 'city':
            return state.set('listOfCities', data);
    }
    return state;
}
