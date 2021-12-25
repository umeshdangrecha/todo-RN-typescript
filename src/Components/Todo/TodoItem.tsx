import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../theme/theme";

interface TodoItemProps {
  state: {
    title: string;
  };
  actions: {
    onRemoveTodo: () => void;
  };
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { title } = props.state;
  const { onRemoveTodo } = props.actions;
  return (
    <TouchableOpacity onPress={onRemoveTodo} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: theme.ternaryColor,
  },
  title: {
    color: theme.ternaryColor,
    fontSize: 17,
  },
});
