import "./destaques.css";
import Jd from "./jd";
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
      <div className="titulo_2">
        <h1>Em Breve</h1>
      </div>
      <Jd></Jd>
    </>
  );
};

export default Destaques;
