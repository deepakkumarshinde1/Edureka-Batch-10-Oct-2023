import { Button, Text, TextInput, View } from "react-native";
import style from "./style";
import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoApp() {
  let [todoList, setTodoList] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let saveTodo = () => {
    setTodoList([inputValue, ...todoList]);
    setInputValue("");
  };
  let inputChange = (text) => {
    setInputValue(text);
  };
  return (
    <>
      <View style={style.container}>
        <Text style={style.todoTitle}>My Todo App </Text>
        <TextInput
          style={style.todoInput}
          placeholder="Enter Todo"
          onChangeText={inputChange}
          value={inputValue}
        />
        <Button title="Save" onPress={saveTodo} />
        <TodoList todoList={todoList} />
      </View>
    </>
  );
}
