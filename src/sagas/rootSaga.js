import { all } from "@redux-saga/core/effects";
import watcherUserSaga from "./handlers/fetchUsers";

export default function* rootSaga() {
  yield all([watcherUserSaga()])
}