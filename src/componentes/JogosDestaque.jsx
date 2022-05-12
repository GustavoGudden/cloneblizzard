import "./jogosdestaques.css";
import d2 from "./imagens/d2.webp";
import ow from "./imagens/ow.webp";
import st from "./imagens/st.webp";
import hs from "./imagens/ws.jpg";

const JogosDestaque = () => {
  return (
    <>
      <div className="jogosdestaque">
        <div className="item">
          <img src={hs} alt="" />
          <h2>heartstone</h2>
          <p>jogo de cards estrategico</p>
        </div>
        <div className="item">
          <img src={d2} alt="" />
          <h2>Diablo 2:Resurrected</h2>
          <p>rpg</p>
        </div>
        <div className="item">
          <img src={st} alt="" />
          <h2>STARCRAFT</h2>
          <p>Estrategia em tempo real</p>
        </div>
        <div className="item">
          <img src={ow} alt="" />
          <h2>OVERWATCH </h2>
          <p>fps</p>
        </div>
      </div>
    </>
  );
};

export default JogosDestaque;
