import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/SobreMi">Sobre Mí</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}
