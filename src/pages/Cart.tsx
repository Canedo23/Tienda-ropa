import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css"; // ✅ Importar los estilos

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} className="cart-image" />
                <div>
                  <h2>{product.name}</h2>
                  <p>${product.price}</p>
                </div>
                <div className="quantity-container">
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <h2 className="total-price">Total: ${totalPrice.toFixed(2)}</h2>
          <button className="checkout-button" onClick={() => navigate("/checkout")}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
};

export default Cart;
