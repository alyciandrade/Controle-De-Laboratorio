import React, { useState } from "react";
import { Link } from "react-router-dom";
import CampoInput from "../components/CampoInput";
import "/src/assets/styles/criarEventos.css";

const CriarEvento = () => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [sala, setSala] = useState("");
  const [horario, setHorario] = useState("");
  const [vagas, setVagas] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="eventos">
      <h1>Criar Evento</h1>
      <form className="form_evento">
        <label htmlFor="nome">Nome:</label>
        <CampoInput
          className="input_edit"
          name="nome"
          type="text"
          placeholder="nome"
          icon="icon"
          value={setNome}
        />
        <label htmlFor="data">Data:</label>
        <CampoInput
          className="input_edit"
          name="data"
          type="date"
          placeholder="nome"
          icon="icon"
          value={setData}
        />
        <label htmlFor="sala">Sala:</label>

        <select onChange={() => setSala(value)} name="sala" className="input_edit">
          <option>Selecione</option>
          <option>Sala 1</option>
          <option>Sala 2</option>
          <option>Sala 3</option>
        </select>
        <label htmlFor="horario">Horário:</label>
        <select onChange={() => setHorario(value)} name="horario" className="input_edit">
          <option>Selecione</option>
          <option>08:00 - 09:00</option>
          <option>09:00 - 10:00</option>
          <option>10:00 - 11:00</option>
        </select>
        <label htmlFor="vagas">Vagas</label>
        <CampoInput
          className="input_edit"
          name="vagas"
          type="text"
          placeholder="nome"
          icon="icon"
          value={setVagas}
        />
        <label htmlFor="descricao">Descrição</label>
        <CampoInput
          className="input_edit"
          name="descricao"
          type="text"
          placeholder="nome"
          icon="icon"
          value={setDescricao}
        />
        <Link to="/home">
        <button className="input_login button" type="submit">
          Criar
        </button>
        </Link>
      </form>
    </div>
  );
};

export default CriarEvento;
