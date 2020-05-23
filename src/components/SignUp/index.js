import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function SignUp({ sign }) {
  return (
    <Container>
      <div className="container right-panel-active" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Crie sua conta</h1>
            <div className="social-container">
              <Link to="4" className="social">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="1" className="social">
                <i className=" fa fa-google"></i>
              </Link>
              <Link to="2" className="social">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>
            <span>ou use seu email para registrar-se</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick="">Registrar</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem vindo de volta!</h1>
              <p>
                Para se manter conectado, faça o login com suas informações
                pessoais
              </p>
              <button onClick={sign} className="ghost" id="signIn">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
