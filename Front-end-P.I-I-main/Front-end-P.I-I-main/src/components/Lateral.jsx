import React from "react";
import "../assets/styles/home.css";
import IconButton from "../components/IconButton";
import { Link } from "react-router-dom";

const Lateral = () => {
  return (
    <section className="lat_nav">
      <section>
        <img src="/src/assets/images/Logo 2.png" alt="Perfil" />
        <img src="/src/assets/images/perfil.png" alt="Perfil" />
      </section>
      <nav className="nav_buttons">
        <IconButton
          className="icon_button"
          source="/src/assets/images/silhueta-de-icone-de-casa.png"
          texto="Início"
          act="/"
        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/do-utilizador (1).png"
          texto="Perfil"
          act="/perfil"
        />
        <IconButton
          className="icon_button"
          source="/src/assets/images/evento-eleitoral-em-um-calendario-com-o-simbolo-de-estrela (1).png"
          texto="Meus Eventos"
          act="/eventos"
        />
      </nav>
      <div>
        <Link to="/criar">
          <button className="button_evento">Criar Evento</button>
        </Link>
        <Link to="/login">
          <button className="button_sair">Sair</button>
        </Link>
      </div>
    </section>
  );
};

export default Lateral;
