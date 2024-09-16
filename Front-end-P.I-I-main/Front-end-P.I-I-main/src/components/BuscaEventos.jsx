import React, {useState} from "react";
import CampoInput from "../components/CampoInput";
import Card from "../components/Card";

const BuscaEventos = ({ setModalAtivo }) => {
  const [busca, setBusca] = useState("");
  
  return (
    <>
      <CampoInput
        className="input_pesquisa"
        name="search"
        type="text"
        placeholder="Buscar eventos"
        source="/src/assets/images/lupa.png"
        icon="icon"
        value={setBusca}
        required
      />
      <h1>Bem-Vindo(a), Fulana</h1>
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
    </>
  );
};

export default BuscaEventos;
