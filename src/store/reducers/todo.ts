import { ADD_TODO, REMOVE_TODO } from "../../constants";
import Todo from "../../modal/Todo";
import { StoreInterface, Actions } from "../../interfaces/redux-interfaces";

const defaultState: StoreInterface = {
  todos: [],
};

const todoReducer = (state = defaultState, actions: Actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return { todos: [...state.todos, new Todo(actions.payload.title)] };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((item) => item.id !== actions.payload.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
