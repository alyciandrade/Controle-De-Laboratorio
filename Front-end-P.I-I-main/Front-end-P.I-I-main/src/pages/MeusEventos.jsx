import React, { useState } from "react";
import Eventos from "../components/Eventos";
import SemEventos from "../components/SemEventos";

const MeusEventos = () => {
  const [eventos, setEventos] = useState("1");

  return (
    <>
      <h1>Meus eventos</h1>
      {eventos ? <Eventos /> : <SemEventos />}
      
      
    </>
  );
};

export default MeusEventos;
