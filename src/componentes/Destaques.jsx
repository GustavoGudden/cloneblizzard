import "./destaques.css";
import JogosDestaque from "./JogosDestaque";

const Destaques = () => {
  return (
    <>
      <div className="destaque">
        <div className="titulo">
          <h1>Jogos em Destaque</h1>
        </div>
        <div className="bt">
          <button>PC</button>
          <button>CONSOLE</button>
          <button>DISPOSITIVOS MOVEIS</button>
        </div>
      </div>
      <JogosDestaque></JogosDestaque>
    </>
  );
};

export default Destaques;
