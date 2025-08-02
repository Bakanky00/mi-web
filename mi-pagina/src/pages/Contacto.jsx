export default function Contacto() {
  return (
    <div className="main-container">
      <section>
        <h2>Contacto</h2>
        <p>Podés contactarme a través de mis redes o correo electrónico:</p>

        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/in/ayrton-gustavo-moreira-8178a9323"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/ayrtonmoreira22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Instagram
          </a>

          <a href="mailto:kinkimoreira9@gmail.com" className="btn">
            Enviar Email
          </a>

          {/* Botón para descargar el CV */}
          <a href="CvAyrtonMoreira.pdf" download className="btn">
            Descargar CV
          </a>
        </div>
      </section>
    </div>
  );
}
