import { put, takeLatest, select, call } from "redux-saga/effects";
import { loginApi,registerApi } from "../../api/authApi";

export interface ResponseGenerator {
  json(): unknown;
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
//unify technologies
function* fetchAuthDetails(action: any) {
  try {
    // console.log(action.payload);

    const loginRes: ResponseGenerator = yield loginApi(action.payload);
    // console.log(res.data,'jjjjj');
    yield put({
      type: "LOGIN_USER",
      payload: loginRes.data,
    });
  } catch (e) {
    console.log("errors", e);
  }
}

function* registerDetails(action: any) {
  try {
    console.log("register user", action.payload);
    const registerRes: ResponseGenerator = yield registerApi(action.payload);
    yield put({
      type: "REGISTER_USER",
      payload: registerRes.data,
    });
  } catch (e) {
    console.log("errors", e);
  }
}

export function* authSaga() {
  yield takeLatest("SIGN_IN_USER", fetchAuthDetails);
  
}
export function* registerSaga(){
  yield takeLatest("REGISTER_USER", registerDetails);
}