import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GET_PRODUCTS_NAME } from "./GraphQl/Query";
import { useEffect, useState } from "react";
const Table = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);

  //   if (data) console.log(data);
  //   if (error) console.log(error);
  useEffect(() => {
    if (data !== undefined) {
      setProducts([...data.getProduct]);
    }
  }, [data]);
  return (
    <>
      <p className="text-center h4">Product Table</p>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center table-primary">
            <th width="10%">Sr No</th>
            <th width="40%">Title</th>
            <th width="20%">Price</th>
            <th width="10%">Rate</th>
            <th width="20%">Feedback Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>Rs. {product.price}/-</td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
