import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetError } from "../redux/product.slice";
import Swal from "sweetalert2";

let Error = () => {
  let dispatch = useDispatch();
  let { error } = useSelector((state) => state.products);
  useEffect(() => {
    if (error.isError) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        dispatch(resetError());
      });
    }
  }, [error]);
  return <></>;
};

export default Error;
