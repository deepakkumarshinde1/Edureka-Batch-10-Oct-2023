// import (option)
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
// import "./App.css";
// component logic
function App() {
  return (
    <>
      {/* <center>
        <button onClick={changeText}>Change Text</button>
        <h1>{text}</h1>
      </center> */}
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-11 m-auto">
            <Header />
            <Input />
            <hr />
            <List />
          </section>
        </section>
      </section>
    </>
  );
}

// export component
export default App;
