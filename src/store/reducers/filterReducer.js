import { SET_VISIBILITY_FILTER_TODO } from "../config/todoTypes";

//Initial values for filter state
let initialState='SHOW_ALL';

export const filterReducer=(state=initialState,action)=>{

    switch (action.type) {
        case SET_VISIBILITY_FILTER_TODO:
            return action.payload.filter;
    
        default:
            return state
    }

}