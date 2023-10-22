import Home from "./components/Home";
import ProductSearch from "./components/ProductSearch";
import ProductDetails from "./components/ProductDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/404";
import Error from "./components/Errors";

function App() {
  return (
    <>
      <Error />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-search/:c_id" element={<ProductSearch />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
