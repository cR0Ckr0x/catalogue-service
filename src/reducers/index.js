import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import locationReducer from './location_reducer';
import basketReducer from './basket_reducer';

const rootReducer = combineReducers({
    user: userReducer,
    locationID: locationReducer,
    basket: basketReducer
});

export default rootReducer;
