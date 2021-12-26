import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddTodo from "./src/Components/Todo/AddTodo";
import Todos from "./src/Components/Todo/Todos";
import theme from "./src/theme/theme";
import { Provider } from "react-redux";
import store from "./src/store/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.title}>All Todos</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.todos}>
          <Todos />
        </ScrollView>
        <View style={styles.addTodo}>
          <AddTodo />
        </View>
      </View>
    </Provider>
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
