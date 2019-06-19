import { combineReducers } from 'redux'

import profileReducer  from  './features/profile/profile-reducer';
import dashBoardReducer from './features/dashboard/dashboard-reducer';
const rootReducer = combineReducers({profileReducer, dashBoardReducer})
export default rootReducer;