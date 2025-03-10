import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav>
      <h1>Stüssy</h1>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      {isLoggedIn && <Link to="/carrito">🛒 Carrito ({cart.length})</Link>}
      {isLoggedIn ? (
        <>
          <span>
            👤 {user?.username}
          </span>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
