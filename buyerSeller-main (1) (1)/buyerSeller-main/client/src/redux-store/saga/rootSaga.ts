import { all,fork } from "redux-saga/effects";
import { authSaga,registerSaga,listeItemsSaga } from "./saga";

export default function* rootSaga(){
yield all([
    fork(authSaga),
    fork(registerSaga),
    fork(listeItemsSaga)
    
])
}