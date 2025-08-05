import logo from "../assets/logo.jpg";
import Presentacion from "../components/Presentacion";
import Habilidades from "../components/Habilidades";
import Objetivos from "../components/Objetivos";

export default function Inicio() {
  return (
    <div className="main-container">
      <section className="inicio">
        <img src={logo} alt="Logo World Of Ayrton" className="logo" />

        <h1>Bienvenido a World Of Ayrton</h1>
        
        <h2>¿Qué es esta página?</h2>

        <Presentacion />
        <Habilidades />
        <Objetivos />
      </section>
    </div>
  );
}
