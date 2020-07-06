import {combineReducers} from "redux";
import postReducer from "./postReducer";

let rootReducers = combineReducers({
    data: postReducer
});

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducers;