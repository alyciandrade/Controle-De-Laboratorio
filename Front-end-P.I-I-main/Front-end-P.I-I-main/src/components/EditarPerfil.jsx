import React, { useState } from "react";
import "../assets/styles/perfil.css";
import CampoInput from "../components/CampoInput";

const EditarPerfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="edit_form">
      <img src="/src/assets/images/perfil.png" alt="Perfil" />
      <form>
        <div>
          <label htmlFor="nome">Nome</label>
          <CampoInput
            className="input_edit"
            name="nome"
            type="text"
            placeholder="nome"
            source="/src/assets/images/cartao-de-identidade.png"
            icon="icon"
            value={setNome}
          />
          <label htmlFor="email">E-mail</label>
          <CampoInput
            className="input_edit"
            name="email"
            type="email"
            placeholder="email"
            source="/src/assets/images/e-mail 2.png"
            icon="icon"
            value={setEmail}
          />
          <label htmlFor="senha">Senha</label>
          <CampoInput
            className="input_edit"
            name="senha"
            type="password"
            placeholder="senha"
            source="/src/assets/images/senha 2.png"
            icon="icon"
            value={setSenha}
          />
        </div>
        <button className="input_login button" type="submit">
          Alterar
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
