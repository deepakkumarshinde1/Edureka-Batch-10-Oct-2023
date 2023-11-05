import { Button, Text, TextInput, View } from "react-native";
import style from "./style";
export default function TodoList({ todoList }) {
  return (
    <>
      <View style={style.todoList}>
        {todoList.map((todo, index) => {
          return (
            <Text key={index} style={style.todoListText}>
              {todo}
            </Text>
          );
        })}
      </View>
    </>
  );
}
