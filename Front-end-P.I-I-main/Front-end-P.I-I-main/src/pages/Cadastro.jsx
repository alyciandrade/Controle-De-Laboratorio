import React from "react";
import CadastroForm from "../components/CadastroForm";
import "../assets/styles/login.css";


const Cadastro = () => {
  return (
    <main className="view cadastro">
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
      <CadastroForm />

    </main>
  );
};

export default Cadastro;
