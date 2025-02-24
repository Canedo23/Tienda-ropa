import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products"; // Importa la nueva página

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
