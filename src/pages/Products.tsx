import { Link } from "react-router-dom";
import "../styles/products.css"; // Asegúrate de importar los estilos

const Products = () => {
  const products = [
    { id: 1, name: "BASIC STÜSSY THERMAL", price: 80, image: "../../public/img/camisetaStussy.webp" },
    { id: 2, name: "DICE ZIP HOODIE PIGMENT DYED", price: 140, image: "../../public/img/sudaderaStussy.webp" },
    { id: 3, name: "HANDWRITTEN SWEATER", price: 150, image: "../../public/img/jerseyStussy.webp" },
    { id: 4, name: "Zapatillas Deportivas", price: 49.99, image: "../../public/img/pantalonesStussy.webp" },
    { id: 5, name: "Bolso Casual", price: 29.99, image: "../../public/img/chaquetaStussy.webp" },
    { id: 6, name: "Reloj Moderno", price: 89.99, image: "../../public/img/calcetinesStussy.webp" }
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
