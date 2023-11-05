import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import style, { buttonColors } from "./components/style";
import { useState } from "react";
import TodoApp from "./components/TodoApp";
import UserList from "./components/UserList";

export default function App() {
  let [count, setCount] = useState(0);
  let [counterId, setCounterId] = useState(null);
  let incCount = () => {
    if (counterId) {
      clearInterval(counterId);
      setCounterId(null);
    } else {
      let _counterId = setInterval(() => {
        setCount(++count);
      }, 100);
      setCounterId(_counterId);
    }
  };
  return (
    <>
      <View style={style.container}>
        <StatusBar hidden />
        <UserList />
      </View>
    </>
  );
}
