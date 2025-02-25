import { Link } from "react-router-dom";
import "../styles/products.css"; // Asegúrate de importar los estilos

const Products = () => {
  const products = [
    { id: 1, name: "Camiseta Blanca", price: 19.99, image: "/img/camiseta1.jpg" },
    { id: 2, name: "Jeans Clásicos", price: 39.99, image: "/img/jeans.jpg" },
    { id: 3, name: "Chaqueta Negra", price: 59.99, image: "/img/chaqueta.jpg" },
    { id: 4, name: "Zapatillas Deportivas", price: 49.99, image: "/img/zapatillas.jpg" },
    { id: 5, name: "Bolso Casual", price: 29.99, image: "/img/bolso.jpg" },
    { id: 6, name: "Reloj Moderno", price: 89.99, image: "/img/reloj.jpg" }
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/producto/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
