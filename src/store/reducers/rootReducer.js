import {combineReducers} from 'redux';
import { todosReducer } from './todoReducer';
import { filterReducer } from './filterReducer';
import { userReducer } from './userReducer';


export const rootReducer=combineReducers(
    {
        todosState:todosReducer,
        filterState:filterReducer,
        userState: userReducer,
    }
)