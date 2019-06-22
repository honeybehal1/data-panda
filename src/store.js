import { combineReducers } from 'redux'

import menuListReducer from '../src/components/menu-list/connect/menu-list-reducer';
import dashBoardReducer from './features/dashboard/dashboard-reducer';
const rootReducer = combineReducers({ menuListReducer, dashBoardReducer })
export default rootReducer;