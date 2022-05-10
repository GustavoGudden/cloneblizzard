import "./jogosdestaques.css";
import dg from "./imagens/dg.webp";

const JogosDestaque = () => {
  return (
    <>
      <div className="jogosdestaque">
        <div className="item">
          <img src={dg} alt="" />
          <h2>DIABLO 2:</h2>
          <p>rpg</p>
        </div>
        <div className="item">
          <img src={dg} alt="" />
          <h2>STARCRAFT</h2>
          <p>rpg</p>
        </div>
        <div className="item">
          <img src={dg} alt="" />
          <h2>teste</h2>
          <p>rpg</p>
        </div>
        <div className="item">
          <img src={dg} alt="" />
          <h2>OVERWHATCH</h2>
          <p>rpg</p>
        </div>
      </div>
    </>
  );
};

export default JogosDestaque;
