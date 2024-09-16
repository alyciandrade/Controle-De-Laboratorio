import "../assets/styles/card.css";

const Card = ({ source, setModalAtivo }) => {
  const abrir = () => {
    setModalAtivo(true);
    console.log("ativou");
  };
  return (
    <>
      <div className="card_evento">
        <section className="imagem">
          <img className="evento_img" src={source} />
        </section>

        <section className="info">
          <div className="nome_vaga">
            <h3>Monitoria de Programação Orientada a Objetos</h3>
            <span>Vagas: 35</span>
          </div>
          <h4>
            Monitoria da disciplina de Programação Orientada a Objetos 2024.1
          </h4>
          <div className="horario_mais">
            <div>
              <span>Data: 02/10/2024</span>
              <span>Horário: 13h:00 às 15h00</span>
              <span>Local: Sala 04</span>
            </div>
            <button onClick={abrir}>Saiba mais</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
