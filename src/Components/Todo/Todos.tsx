import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import Todo from "../../modal/Todo";
import TodoItem from "./TodoItem";
import { removeTodo } from "../../store/actions/todo";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerInterface } from "../../interfaces/redux-interfaces";
import { pickImageByIndex } from "../../data/images";

const Todos: React.FC = () => {
  const state = useSelector((state: RootReducerInterface) => state.todo);
  const dispatch = useDispatch();
  const todos = state.todos;

  const onRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  // return <Text>hellp</Text>;

  const renderItem = React.useCallback((item: ListRenderItemInfo<Todo>) => {
    return (
      <TodoItem
        state={{ title: item.item.title, image: pickImageByIndex(item.index) }}
        actions={{ onRemoveTodo: onRemoveTodo.bind(null, item.item.id) }}
      />
    );
  }, []);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentStyle}
      data={todos}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      // keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
  // return (
  //   <View style={styles.container}>
  //     {todos.map((item) => (

  //     ))}
  //   </View>
  // );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
    height: "100%",
  },
  contentStyle: {
    alignItems: "stretch",
    justifyContent: "space-between",
  },
});
