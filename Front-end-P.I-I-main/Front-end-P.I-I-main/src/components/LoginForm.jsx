import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import CampoInput from "./CampoInput";
import userService from "../services/authService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await userService.login(email, senha);
      console.log("Login bem-sucedido:", response);
      navigate("/home");
    } catch (err) {
      err ? setError(err) : setError("Erro de conexão");
    }
  };

  return (
    <main className="login_container">
      <section className="login_titulo">
        <h1>LOGIN</h1>
        <span>
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </span>
      </section>

      <form className="login_form" onSubmit={handleSubmit}>
        {error && <p className="error_message">{error}</p>}
        <div className="login_field">
          <label htmlFor="email">E-mail</label>
          <CampoInput
            className="input_login"
            name="email"
            type="email"
            placeholder="Digite aqui seu e-mail"
            source="/src/assets/images/e-mail.png"
            icon="icon"
            required
            value={setEmail}
          />

          <label htmlFor="senha">Senha</label>
          <CampoInput
            className="input_login"
            name="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            source="/src/assets/images/senha.png"
            icon="icon"
            required
            value={setSenha}
          />

          <button className="input_login button" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
