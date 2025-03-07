import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useCart(); // ✅ Ahora no incluye isLoggedIn
  const { isLoggedIn } = useAuth(); // ✅ Se obtiene de AuthContext
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div className="checkout-container">
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para finalizar la compra.</p>
        <button className="login-button" onClick={() => navigate("/login")}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  const handlePurchase = () => {
    alert("¡Compra realizada con éxito!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <h2>Total a pagar: ${totalPrice.toFixed(2)}</h2>
      <button className="confirm-button" onClick={handlePurchase}>Confirmar Pago</button>
    </div>
  );
};

export default Checkout;
