import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/productDetail.css";

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
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = mockProducts.find((p) => p.id === Number(id)) || null;
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate("/productos")}>
        ← Volver a Productos
      </button>
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p>{product.description}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
