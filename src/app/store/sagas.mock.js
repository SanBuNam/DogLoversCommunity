import { take, put, select } from "redux-saga/effects";
import * as mutations from "./mutations";
import uuid from "uuid";
import { defaultState } from "../../server/defaultState";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuid();
    yield put(mutations.createTask(taskID, groupID, ownerID));
<<<<<<< HEAD

=======
>>>>>>> 6c2381503c07afff18232089cf8eaec6cdbc7f42
    console.log("Got group ID", groupID);
  }
}
