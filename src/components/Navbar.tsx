import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { cart } = useCart(); // Obtenemos el carrito para mostrar la cantidad de productos

  return (
    <nav className="navbar">
      <h2>Tienda de Ropa</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li>
          <Link to="/carrito" className="cart-icon">
            🛒 <span className="cart-count">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
