import React from "react";
import "../assets/styles/home.css";
import "/src/assets/styles/semEventos.css"

const SemEventos = () => {
  return (
    <>
      <div className="sem_eventos">
        <img src="/src/assets/images/boneco triste.png" />
        <h1>Sem eventos cadastrados!</h1>
      </div>
    </>
  );
};

export default SemEventos;
