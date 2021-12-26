import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Todo from "../../modal/Todo";
import TodoItem from "./TodoItem";
import { removeTodo } from "../../store/actions/todo";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerInterface } from "../../interfaces/redux-interfaces";

const Todos: React.FC = () => {
  const state = useSelector((state: RootReducerInterface) => state.todo);
  const dispatch = useDispatch();
  const todos = state.todos;

  const onRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  // return <Text>hellp</Text>;
  return (
    <View style={styles.container}>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          state={{ title: item.title }}
          actions={{ onRemoveTodo: onRemoveTodo.bind(null, item.id) }}
        />
      ))}
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
