import { Button, Text, TextInput, View } from "react-native";
import style from "./style";
import { useEffect, useState } from "react";
export default function UserList() {
  let [userList, setUserList] = useState([]);

  let getUserList = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/users`;
      let response = await fetch(url, { method: "GET" });
      let data = await response.json();
      setUserList(data);
    } catch (error) {
      alert("Unable to get data from server");
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <>
      <View style={style.todoList}>
        <Text style={style.todoTitle}>User List From API</Text>
        {userList.map((user, index) => {
          return (
            <Text key={index} style={style.todoListText}>
              {user.name}
            </Text>
          );
        })}
      </View>
    </>
  );
}
