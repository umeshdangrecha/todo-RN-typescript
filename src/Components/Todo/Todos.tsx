import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import Todo from "../../modal/Todo";
import TodoContext from "../../store/TodoContext";
import TodoItem from "./TodoItem";

// interface TodosProps {
//   state: {
//     todos: Todo[];
//   };
//   actions: {
//     onRemoveTodo: (id: string) => void;
//   };
// }

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  const { todos = [], onRemoveTodo } = todoCtx;

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
