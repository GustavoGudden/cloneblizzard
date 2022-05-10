import logo from "./imagens/transferir.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <a href="">Jogos</a>
      <a href="">Loja</a>
      <a href="">Noticias</a>
      <a href="">E-sportes</a>
      <div className="sup_log">
        <a href="">Suporte</a>
        <a href="">Minha Conta</a>
      </div>
    </nav>
  );
};

export default Navbar;
