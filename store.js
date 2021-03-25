import createSagaMiddleware from "redux-saga";
import rootSaga from "./index";

const store = compose();

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export default store;
