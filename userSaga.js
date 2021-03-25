import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getApi() {
  return axios
    .get(apiUrl)
    .then(() => {})
    .catch((e) => console.log(e));
}

function* fetchUsers(actions) {
  try {
    const users = yield call(getApi);
    yield put({ action: "name" });
  } catch (e) {
    yield put({ another: "action" });
  }
}

function* userSaga() {
  yield takeEvery("ACTION_TYPE", fetchUsers);
}

export default userSaga;
