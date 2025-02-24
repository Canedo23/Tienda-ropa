import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🛍️ Tienda de Ropa</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
