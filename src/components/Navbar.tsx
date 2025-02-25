import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

const Navbar = () => {
    const { cart } = useCart();
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>Tienda de Ropa</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/carrito">🛒 <span className="cart-count">{cart.length}</span></Link></li>
            <li><button className="logout-button" onClick={logout}>Cerrar Sesión</button></li>
          </>
        ) : (
          <li><Link to="/login">Iniciar Sesión</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
