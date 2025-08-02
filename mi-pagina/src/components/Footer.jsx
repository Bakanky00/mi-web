import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} World Of Ayrton. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
