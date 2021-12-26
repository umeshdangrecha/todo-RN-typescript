import { AnyAction, combineReducers, createStore, Store } from "redux";
import todoReducer from "./reducers/todo";
import { RootReducerInterface } from "../interfaces/redux-interfaces";

const rootReducer = combineReducers<RootReducerInterface>({
  todo: todoReducer,
});

const store: Store<RootReducerInterface, AnyAction> = createStore(rootReducer);

export default store;
