import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/Components/Todo/AddTodo";
import Todos from "./src/Components/Todo/Todos";
import Todo from "./src/modal/Todo";
import theme from "./src/theme/theme";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (title: string) => {
    setTodos((prev) => prev.concat(new Todo(title)));
  };

  const onRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Todos</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.todos}>
        <Todos state={{ todos }} actions={{ onRemoveTodo }} />
      </ScrollView>
      <View style={styles.addTodo}>
        <AddTodo actions={{ onAddTodo: onAddTodo }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    marginTop: 50,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: theme.primaryColor,
  },
  todos: {
    marginTop: 30,
    flex: 1,
  },
  addTodo: {
    marginVertical: 10,
  },
});
