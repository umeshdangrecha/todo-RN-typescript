import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import TodoContext, { StoreInterface } from "./TodoContext";
import Todo from "../modal/Todo";

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (title: string) => {
    setTodos((prev) => prev.concat(new Todo(title)));
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const storeValue: StoreInterface = {
    todos: todos,
    onAddTodo: onAddTodo,
    onRemoveTodo: onRemoveTodo,
  };
  return (
    <TodoContext.Provider value={storeValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
