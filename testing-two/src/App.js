import FormApp from "./components/FormApp/FormApp";
import Product from "./components/Products/Products";

function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-10 text-center">
            {/* <FormApp text="Forms" /> */}
            <Product />
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
