import {combineReducers} from "redux";
import postReducer from "./postReducer";

let rootReducers = combineReducers({
    data: postReducer
});

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

type ActionTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<ActionTypes<T>>;

export default rootReducers;