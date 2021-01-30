import userReducer from './UserReducer';
import inputDataReducer from './InputDataReducer';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    userReducer,
    inputDataReducer
})

export default rootReducer;