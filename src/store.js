import { combineReducers } from 'redux'

import menuListReducer from '../src/components/menu-list/connect/menu-list-reducer';
import dashBoardReducer from './features/dashboard/dashboard-reducer';
import signUpReducer from './features/sign-up/connect/sign-up-reducer';
import geoLocation from '../src/components/address/connect/geo-location-reducer';

const rootReducer = combineReducers({ menuListReducer, dashBoardReducer, signUpReducer, geoLocation })
export default rootReducer;