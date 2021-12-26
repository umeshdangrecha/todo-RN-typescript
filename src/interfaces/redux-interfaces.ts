import Todo from "../modal/Todo";

export interface StoreInterface {
  todos: Todo[];
}
export interface Actions {
  type: string;
  payload?: any;
}
export interface RootReducerInterface {
  todo: StoreInterface;
}
