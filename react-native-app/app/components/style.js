import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  bgGreen: {
    backgroundColor: "red",
  },
  todoTitle: {
    color: "#C70039",
    fontSize: 24,
  },
  todoInput: {
    width: 300,
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 3,
    borderStyle: "dotted",
    marginBottom: 10,
    textAlign: "center",
  },
  todoList: {
    marginTop: 10,
    flex: 1,
    alignItems: "flex-start",
    width: 350,
  },
  todoListText: {
    width: 350,
    padding: 5,
    borderBottomWidth: 2,
    borderStyle: "dotted",
    borderBottomColor: "gray",
  },
});

export const buttonColors = {
  green: "green",
  red: "red",
};
