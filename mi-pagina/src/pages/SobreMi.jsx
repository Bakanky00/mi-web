import yo from "../assets/yo.jpg";

export default function SobreMi() {
  return (
    <div className="main-container">
      <section>
        <div className="profile">
          <img src={yo} alt="Mi foto" />
          <h1>Sobre Mí</h1>
        </div>
        <p>
          Soy estudiante de Licenciatura en Informática. Actualmente me
          encuentro cursando mi 3° año en la carrera. Soy un apasionado en las
          tecnologías web, el desarrollo de software y la automatización.
        </p>
        <p>
          Este sitio es mi lugar personal donde comparto mis avances, mis
          proyectos y todo lo que voy aprendiendo en mi camino académico. Me
          interesa también la inteligencia artificial, las interfaces modernas y
          la programación enfocada en soluciones reales.
        </p>
      </section>
    </div>
  );
}
