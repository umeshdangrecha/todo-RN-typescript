import React, { createContext } from "react";
import Todo from "../modal/Todo";

export interface StoreInterface {
  todos: Todo[];
  onAddTodo: (title: string) => void;
  onRemoveTodo: (id: string) => void;
}

const defaultState: StoreInterface = {
  todos: [],
  onAddTodo: (title) => {},
  onRemoveTodo: (id) => {},
};

export default createContext<StoreInterface>(defaultState);
