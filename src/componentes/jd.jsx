import "./jogosdestaques.css";
import d4 from "./imagens/d4.webp";
import ow2 from "./imagens/ow2.webp";
import wc from "./imagens/wc.webp";
import wc2 from "./imagens/wc2.webp";

const Jd = () => {
  return (
    <>
      <div className="jogosdestaque">
        <div className="item">
          <img src={wc2} alt="" />
          <h2>word of warcraft</h2>
          <p>açao e estrategia para mobile</p>
        </div>
        <div className="item">
          <img src={d4} alt="" />
          <h2>Diablo 4</h2>
          <p>rpg de açao</p>
        </div>
        <div className="item">
          <img src={wc} alt="" />
          <h2>Word of Warcraft:Dragonflight </h2>
          <p>expasão</p>
        </div>
        <div className="item">
          <img src={ow2} alt="" />
          <h2>OVERWATCH 2 </h2>
          <p>fps</p>
        </div>
      </div>
    </>
  );
};

export default Jd;
