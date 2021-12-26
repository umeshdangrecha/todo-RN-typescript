import { ADD_TODO, REMOVE_TODO } from "../../constants";

export const addTodo = (title: string) => {
  return {
    type: ADD_TODO,
    payload: {
      title: title,
    },
  };
};
export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};
