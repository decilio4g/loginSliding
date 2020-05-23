import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function SignIn({ sign }) {
  return (
    <Container>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Bem vindo!</h1>
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
            <span>ou use sua conta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link className="forgot-password" to="#">
              Esqueceu a senha?
            </Link>
            <button className="submit">Entrar</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Olá, amigo!</h1>
              <p>Digite seus dados pessoais e comece a jornada conosco</p>
              <button onClick={sign} className="ghost" id="signUp">
                Registre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SignIn;
