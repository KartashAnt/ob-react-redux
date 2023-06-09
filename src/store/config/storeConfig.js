import {applyMiddleware, compose, legacy_createStore} from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import  createSagaMiddleware  from 'redux-saga';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore=()=>{
    let store=legacy_createStore(
        rootReducer,
        composeWithDevTools()
    )

    return store;
}

export const createAsyncAppStore=()=>{

    const sagaMiddleware=createSagaMiddleware();

    let store=legacy_createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware),
        composeWithDevTools())
        
        
    )

    sagaMiddleware.run(watcherSaga);   

    return store;
}