import { useRef } from "react";
import InputText from "./components/InputText";

function App() {
  let userNameInput = useRef();
  let userEmailInput = useRef();
  let newUser = {
    name: "",
    email: "",
  };
  let submit = () => {
    newUser.name = userNameInput.current.getInputData();
    newUser.email = userEmailInput.current.getInputData();
    console.log(newUser);
  };
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-4 col-6 m-auto">
            <InputText
              ref={userNameInput}
              label="User Name"
              placeholder="Enter User Name"
              type="text"
            />
            <InputText
              ref={userEmailInput}
              label="User Email"
              placeholder="Enter User Email"
              type="email"
            />
            <button onClick={submit}>Submit</button>
          </section>
        </section>
      </section>
    </>
  );
}

// export component
export default App;
