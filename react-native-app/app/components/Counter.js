import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import style, { buttonColors } from "./style";
import { useState } from "react";

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
        <Text>{count} </Text>
        <Button
          color={counterId ? buttonColors.red : buttonColors.green}
          title={counterId ? "Stop" : "Start"}
          onPress={incCount}
        />
        <StatusBar hidden />
      </View>
    </>
  );
}
