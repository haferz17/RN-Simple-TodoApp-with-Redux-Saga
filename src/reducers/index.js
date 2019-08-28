import { combineReducers } from 'redux';
import todoReducers from './todoReducers';

const allReducers = combineReducers({
    todoReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;
