import React, { useState } from "react";

import SignIn from "../../components/SignIn/index";
import SignUp from "../../components/SignUp/index";

import { Container } from "./styles";

function Login() {
  const [state, setState] = useState(true);

  function Active() {
    setState(true);
  }

  function Disable() {
    setState(false);
  }

  return (
    <Container>
      {state ? <SignIn sign={Disable} /> : <SignUp sign={Active} />}
    </Container>
  );
}

export default Login;
