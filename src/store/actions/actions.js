//ID for TODOs

import { ADD_TODO, SET_VISIBILITY_FILTER_TODO, TOGGLE_TODO } from "../config/todoTypes";

let nextTodoID=0;


/**
 * Function to add item to the list
 * @param {string} text 
 * @returns 
 */
export const addTodo=(text)=>{
    return{
        type:ADD_TODO,
        payload:{
            id:nextTodoID++,
            text
        }

    }
}

/**
 * Function to toggle id based on its id
 * @param {number} id 
 * @returns 
 */
export const toggleTodo=(id)=>{
    return{
        type:TOGGLE_TODO,
        payload:{
            id
        }

    }
}


/**
 * Set Visibility according to the filter
 * @param {string} filter 
 * @returns 
 */
export const setVisibilityFilter=(filter)=>{
    return{
        type:SET_VISIBILITY_FILTER_TODO,
        payload:{
            filter
        }

    }
}