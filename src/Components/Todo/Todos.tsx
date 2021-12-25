import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Todo from "../../modal/Todo";
import TodoItem from "./TodoItem";

interface TodosProps {
  state: {
    todos: Todo[];
  };
  actions: {
    onRemoveTodo: (id: string) => void;
  };
}

const Todos: React.FC<TodosProps> = (props) => {
  const { todos = [] } = props.state;
  const { onRemoveTodo } = props.actions;
  //   console.log(todos);

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
