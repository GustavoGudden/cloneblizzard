import tf from "./imagens/transferir.png";
import "./footer.css";
import ft from "./imagens/ft.png";
const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={tf} alt="logo blizzard " />
      </div>
      <div className="contatos">
        <p>Carreiras</p>
        <p>Sobre</p>
        <p>Suporte</p>
        <p>Contato</p>
        <p>Impresa</p>
        <p>Api</p>
        <p>Mapa do Site</p>
      </div>
      <div className="cr">
        <p>
          ©2022 Blizzard Entertainment, Inc. Todos os direitos reservados. Todas
          as marcas registradas mencionadas são de propriedade de seus
          respectivos donos.
        </p>
      </div>
      <div className="recomedado">
        <img src={ft} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
