import userReducer from './UserReducer';
import inputDataReducer from './InputDataReducer';
import errorReducer from './ErrorReducer';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    userReducer,
    inputDataReducer,
    errorReducer
})

export default rootReducer;