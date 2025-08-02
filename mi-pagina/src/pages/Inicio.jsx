import logo from "../assets/logo.jpg";
import Presentacion from "../components/Presentacion";
export default function Inicio() {
  return (
    <div className="main-container">
      <section className="inicio">
        <img src={logo} alt="Logo World Of Ayrton" className="logo" />

        <h1>Bienvenido a World Of Ayrton</h1>
        <h2>¿Qué es esta página?</h2>
        <Presentacion />

        <p>
          Aquí voy estar compartiendo mi experiencia personal como estudiante y
          en un futuro como Licenciado en Informática, el camino es largo pero
          no debes bajar los brazos cuando todo parezca que sale mal.
        </p>
      </section>
    </div>
  );
}
