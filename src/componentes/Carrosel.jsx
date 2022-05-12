import { Carousel } from "react-responsive-carousel";
import dg from "./imagens/dg.webp";
import "./carrosel.css";
import cav from "./imagens/cav.png";
import demo from "./imagens/demo.png";
import "./cs.css";
const Carrosel = () => {
  return (
    <div className="car">
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={false}
        interval={60000}
      >
        <div>
          <img alt="" src={dg} />
        </div>
        <div>
          <img alt="" src={cav} />
        </div>
        <div>
          <img alt="" src={demo} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carrosel;
