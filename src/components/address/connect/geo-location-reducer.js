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
        case 'COUNTRY_LIST_RESPONDED':
            return state.set('listOfCountries', data);
        case 'STATE_LIST_RESPONDED':
            return state.set('listOfState', data);
        case 'CITY_LIST_RESPONDED':
            return state.set('listOfCities', data);
    }
    return state;
}
