import userReducer from './UserReducer';
import commentReducer from './CommentReducer';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    userReducer,
    commentReducer
})

export default rootReducer;