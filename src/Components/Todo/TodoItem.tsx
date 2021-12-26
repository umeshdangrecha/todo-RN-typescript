import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { pickImageByIndex } from "../../data/images";
import theme from "../../theme/theme";

interface TodoItemProps {
  state: {
    title: string;
    image: string;
  };
  actions: {
    onRemoveTodo: () => void;
  };
}

const { width } = Dimensions.get("window");
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { title, image } = props.state;
  const { onRemoveTodo } = props.actions;

  return (
    <TouchableOpacity onPress={onRemoveTodo} style={styles.container}>
      <View style={styles.imageOverlay} />
      <Image resizeMode="cover" style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(TodoItem);

const styles = StyleSheet.create({
  container: {
    width: "47%",
    height: width * 0.3,
    alignSelf: "center",
    margin: 5,
    // borderWidth: 1,
    // padding: 15,
    overflow: "hidden",
    borderRadius: 5,
    // borderColor: theme.ternaryColor,
    elevation: 10,
    backgroundColor: theme.white,
  },
  title: {
    color: theme.white,
    fontSize: 20,
    paddingLeft: 10,

    textAlign: "right",
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
  },
});
