import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList, saveProductList } from "../redux/product.slice";
import { useParams, useSearchParams } from "react-router-dom";

function ProductSearch() {
  let dispatch = useDispatch();
  let { c_id } = useParams(); // /:id
  let [URLSearchParams] = useSearchParams(); // ?name="data"

  let { productList } = useSelector((state) => state.products);

  // GET POST PUT DELETE
  // XHR --> XML http Request

  useEffect(() => {
    dispatch(getProductList(c_id));

    return () => {
      dispatch(saveProductList([]));
    };
  }, []); // [stateVariables] --> only once // mounting
  return (
    <>
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="py-3">
          <h5>All Products of {URLSearchParams.get("name")}</h5>
        </div>

        <div className="row mb-3">
          {productList.map((value, index) => {
            return (
              <div key={value.id} className="col-md-3">
                <div className="card size">
                  <img src={value.image} className="card-img-top-img" alt="" />
                  <div className="card-body text-center">
                    <h6 className="product-style text-capitalize">
                      {value.category}
                    </h6>
                    <div className="overflow">
                      <p className="product-name">{value.title}</p>
                    </div>
                    <div className="">
                      <span className="pe-2">₹ {value.price}</span>
                      <span className="text-secondary pe-2">
                        <del>₹ {value.price * 2}</del>
                      </span>
                      <span className="text-success">50% off</span>
                    </div>
                    <div>
                      <p className="product-sizes">
                        <span className="text-secondary">Size</span>
                        <span className="product-sizes-level">M, L, XL</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
