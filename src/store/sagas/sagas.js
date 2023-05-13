import {takeLatest,call,put} from 'redux-saga/effects';
import axios from 'axios';
import { API_CALL_REQUEST } from '../config/asyncTypes';

//Watcher SAGA
//Listens for api request
export function* watcherSaga(){
    //Listens to the actions to start worker saga
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

//Worker saga
//Hace login y devuelve la respuesta

export function* workerSaga(action){
    try {
        const response = yield call(fetchHttp(action.payload));

        const token =response.data.token;

        yield put({
            type:action.payload.okAction,
            payload:{
                token
            }
        })

    } catch (error) {
        yield put({
            type:action.payload.failAction,
            payload:{
                error
            }
        })
    }
}

function fetchHttp(request){
    return function(){
        return axios(request)
    }
}