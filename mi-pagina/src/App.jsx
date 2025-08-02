import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer"; // si tenés uno

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/SobreMi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
