import { useEffect, useState } from "react";
import { getData } from "../../Service/api";

const Product = () => {
  let [message, setMessage] = useState("Loading Data ....");
  let [list, setList] = useState([]);
  //   let getProducts = () => {
  //     setTimeout(() => {
  //       setMessage("Result fetch successfully.");
  //     }, 3000);
  //   };

  useEffect(async () => {
    let data = await getData();
    setList(data);
    setMessage("result fetch successfully");
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Product;
