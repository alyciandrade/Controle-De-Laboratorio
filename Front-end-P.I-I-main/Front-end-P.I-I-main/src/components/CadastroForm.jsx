import React, { useState } from "react";
import "../assets/styles/login.css";
import CampoInput from "./CampoInput";
import userService from "../services/authService";
import { useNavigate } from "react-router-dom";

const CadastroForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ocupacao, setOcupacao] = useState("Estudante");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await userService.register(email, senha, ocupacao);
      console.log("Cadastro bem-sucedido:", response);
      navigate("/login");
    } catch (err) {
      err ? setError(err) : setError("Erro de conexão");
    }
  };

  return (
    <main className="login_container">
      <section className="login_titulo">
        <h1>CADASTRE-SE</h1>
        <span>
          Já possui uma conta? <a href="/login">Entre</a>
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
            value={setSenha}
          />

          <label htmlFor="ocupacao">Ocupação</label>
          <select
            className="input_login"
            value={ocupacao}
            onChange={(e) => setOcupacao(e.target.value)}
          >
            <option value="Estudante">Estudante</option>
            <option value="Professor(a)">Professor(a)</option>
          </select>

          <button className="input_login button" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </main>
  );
};

export default CadastroForm;
