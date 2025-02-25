import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const { cart, clearCart, totalPrice, isLoggedIn } = useCart();
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
      <div className="checkout-summary">
        <h2>Resumen de compra</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} className="checkout-image" />
              <div className="checkout-details">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="checkout-total">Total a pagar: ${totalPrice.toFixed(2)}</h2>
      <button className="confirm-button" onClick={handlePurchase}>Confirmar Pago</button>
    </div>
  );
};

export default Checkout;
