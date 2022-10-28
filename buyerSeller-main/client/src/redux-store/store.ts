import authReducer from './reducers/authReducer';
import registerReducer from './reducers/registerReducer';
import ListingReducer from './reducers/ListingItemsReducer'
import {combineReducers,createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";

const rootReducer=combineReducers({
    authReducer,
    registerReducer,
    ListingReducer
})


export const sagaMiddleware=createSagaMiddleware()

export const store =createStore(
    rootReducer,applyMiddleware(sagaMiddleware)
)