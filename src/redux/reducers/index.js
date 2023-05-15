import { combineReducers } from 'redux';
import categories from './categories';
import Auth from './auth';
import Alert from './alert';

export default combineReducers({
    categories,
    Auth,
    Alert,
})