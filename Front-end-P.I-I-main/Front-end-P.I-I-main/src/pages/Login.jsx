import React from "react";
import LoginForm from "../components/LoginForm";
import "../assets/styles/login.css";

const Login = () => {
  return (
    <main className="view login">
      <LoginForm />
      <section>
        <img
          className="img_logo"
          src="/src/assets/images/Logo 1.png"
          alt="Background"
        />
        <img
          className="img_desenho"
          src="/src/assets/images/Desenho.png"
          alt="Background"
        />
      </section>
    </main>
  );
};

export default Login;
