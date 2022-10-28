import { all,fork } from "redux-saga/effects";
import { authSaga,registerSaga } from "./saga";

export default function* rootSaga(){
yield all([
    fork(authSaga),
    fork(registerSaga)
    
])
}