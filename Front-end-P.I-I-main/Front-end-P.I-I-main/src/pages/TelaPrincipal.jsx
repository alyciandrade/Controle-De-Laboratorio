import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/home.css";
import Lateral from "../components/Lateral";
import Modal from "../components/Modal";
import Perfil from "./Perfil";
import MeusEventos from "./MeusEventos";
import CriarEvento from "./CriarEvento";
import BuscaEventos from "../components/BuscaEventos";

const TelaInicial = () => {
  const [modalAtivo, setModalAtivo] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  let component;
  switch (path) {
    case "/perfil":
      component = <Perfil />;
      break;
    case "/eventos":
      component = <MeusEventos />;
      break;
    case "/criar":
      component = <CriarEvento />;
      break;
    default:
      component = <BuscaEventos setModalAtivo={setModalAtivo} />;
  }

  return (
    <>
      <main className="tela_inicial">
        <Lateral />
        <section className="lat_events">
          <div className="eventos">{component}</div>
        </section>
      </main>
      <Modal modalAtivo={modalAtivo} setModalAtivo={setModalAtivo} />
    </>
  );
};

export default TelaInicial;
