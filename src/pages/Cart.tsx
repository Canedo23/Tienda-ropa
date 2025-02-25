import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-image" />
              <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
