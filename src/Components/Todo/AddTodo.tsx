import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { BottomSheet } from "react-native-btr";
import theme from "../../theme/theme";
import _ from "lodash";

//redux imports
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todo";

const AddTodo: React.FC = (props) => {
  const dispatch = useDispatch();
  const btnLabel = "ADD TODO";

  const [isShow, setShow] = useState(false);
  const [value, setValue] = useState("");

  const toggleBS = () => {
    setShow((show) => !show);
  };

  const onSubmit = () => {
    const title = value;

    if (_.isEmpty(title)) {
      Alert.alert("Empty Title", "Please provide an title to add todo");
      return;
    }
    setShow(false);
    setValue("");
    dispatch(addTodo(title));
  };
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={20}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleBS} style={styles.addBtnWrapper}>
          <Text style={styles.addBtnText}>{btnLabel}</Text>
        </TouchableOpacity>
        <BottomSheet
          visible={isShow}
          onBackButtonPress={toggleBS}
          onBackdropPress={toggleBS}
        >
          <View style={styles.wrapper}>
            <TextInput
              style={styles.inputText}
              onChangeText={(txt) => setValue(txt)}
              placeholder="Enter Todo here..."
              returnKeyType="done"
              returnKeyLabel="Done"
              onSubmitEditing={onSubmit}
            />
            <TouchableOpacity style={styles.addTodoWrapper} onPress={onSubmit}>
              <Text style={styles.addTodoBtnText}>{btnLabel}</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  addBtnWrapper: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    marginTop: 10,
    backgroundColor: theme.primaryLightColor,
    borderRadius: 20,
  },
  addBtnText: {
    fontSize: 18,
    color: theme.white,
    fontWeight: "bold",
  },
  wrapper: {
    width: "100%",
    height: "40%",
    maxHeight: "50%",
    backgroundColor: theme.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputText: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    fontSize: 18,
    borderColor: theme.secondaryColor,
  },
  addTodoWrapper: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    width: "60%",
    padding: 15,
    borderColor: theme.primaryColor,
    borderWidth: 1,
  },
  addTodoBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.primaryColor,
  },
});
