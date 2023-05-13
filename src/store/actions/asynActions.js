import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../config/asyncTypes"

export const login=(email,password)=>{
    return {
        type:API_CALL_REQUEST,
        payload:{
            method:'POST',
            url:'https://reqres.in/api/login',
            data:{
                email,
                password
            },
            okAction:API_CALL_SUCCESS,
            failAction:API_CALL_FAILURE
        }
    }
}

export const httpRequest=(method,url,data)=>{
    return {
        type:API_CALL_REQUEST,
        payload:{
            method,
            url,
            data,
            okAction:API_CALL_SUCCESS,
            failAction:API_CALL_FAILURE
        }
    }
}