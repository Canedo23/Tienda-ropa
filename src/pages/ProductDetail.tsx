import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/productDetail.css"; // Importamos los estilos

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

const mockProducts: Product[] = [
  { id: 1, name: "Camiseta Blanca", price: 19.99, image: "/img/camiseta1.jpg", description: "Camiseta 100% algodón", category: "camisas", stock: 10 },
  { id: 2, name: "Jeans Clásicos", price: 39.99, image: "/img/jeans.jpg", description: "Jeans cómodos y resistentes", category: "pantalones", stock: 5 }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Captura el ID desde la URL
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/productos"); // Redirigir si el producto no existe
    }
  }, [id, navigate]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p>{product.description}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
        {isLoggedIn ? (
          <button className="add-to-cart">Agregar al carrito</button>
        ) : (
          <button className="login-button" onClick={() => navigate("/login")}>Iniciar sesión</button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
