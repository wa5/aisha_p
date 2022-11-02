import authReducer from "./reducers/authReducer";
import registerReducer from "./reducers/registerReducer";
import ListingReducer from "./reducers/ListingItemsReducer";
import AllListedItemsReducer from './reducers/ListedItemsReducer'
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
  authReducer,
  registerReducer,
  ListingReducer,
  AllListedItemsReducer
});

export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
