import { Immutable } from '../../utils/general-imports';
let InitilaData = {
    userExperience: []
}

InitilaData = Immutable.fromJS(InitilaData)
export default function experienceReducer(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'EXPERIENCE_ADDED':           
          return state.set('userExperience', data );
        default:
            return state;
    }
}