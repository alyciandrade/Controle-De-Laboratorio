import React, { useState } from "react";
import "../assets/styles/home.css";
import Card from "../components/Card";
import Modal from "../components/Modal";

const Eventos = () => {
  const [modalAtivo, setModalAtivo] = useState(false);

  return (
    <>
      <div className="cards">
        <Card
          setModalAtivo={setModalAtivo}
          source="/src/assets/images/imagem 1.png"
        />
        <Card
          setModalAtivo={setModalAtivo}
          source="/src/assets/images/imagem 2.png"
        />
        <Card
          setModalAtivo={setModalAtivo}
          source="/src/assets/images/imagem 3.png"
        />
      </div>
      <Modal modalAtivo={modalAtivo} setModalAtivo={setModalAtivo} />
    </>
  );
};

export default Eventos;
