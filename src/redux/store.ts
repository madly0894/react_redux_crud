import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducers from "./reducers/rootReducers";

const middleware = [thunk];

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;