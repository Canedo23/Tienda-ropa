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
  { id: 1, name: "BASIC STÜSSY THERMAL", price: 80, image: "../../public/img/camisetaStussy.webp", description: "Camiseta térmica relajada en algodón de punto gofrado con lavado ácido.", category: "Tops & Shirts", stock: 14 },
  { id: 2, name: "DICE ZIP HOODIE PIGMENT DYED", price: 140, image: "../../public/img/sudaderaStussy.webp", description: "Sudadera con capucha de polar con cremallera delantera y corte relajado en algodón teñido con pigmentos de 480 g/m² de alto gramaje.", category: "Sweats", stock: 3 },
  { id: 3, name: "HANDWRITTEN SWEATER", price: 150, image: "../../public/img/jerseyStussy.webp", description: "Suéter de corte relajado en punto de mezcla de merino y algodón superfino.", category: "Knits", stock: 8 },
  { id: 4, name: "MILITARY CARGO PANT RIPSTOP", price: 155, image: "../../public/img/pantalonesStussy.webp", description: "Pantalón cargo de corte relajado en ripstop de algodón lavado.", category: "Pants", stock: 5 },
  { id: 5, name: "SURF TEAM HARRINGTON JACKET", price: 185, image: "../../public/img/chaquetaStussy.webp", description: "Chaqueta de corte relajado en nailon lavado en prenda. Cuenta con cierre de cremallera de dos direcciones, bolsillos con solapa y puños plisados.", category: "Outerwear", stock: 10 },
  { id: 6, name: "WASHED HELVETICA CREW SOCK", price: 15, image: "../../public/img/calcetinesStussy.webp", description: "Par único de calcetines de algodón peinado elástico con tratamiento de lavado ácido.", category: "Accessories", stock: 5 }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const Product = mockProducts.find((p) => p.id === Number(id)) || null;
    setProduct(Product);
  }, [id]);

  if (!product) return <p>No hay en stock</p>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p>{product.description}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
  
        {/* Contenedor de botones bien alineado */}
        <div className="product-detail-buttons">
          <button className="back-button" onClick={() => navigate("/productos")}>
            ← Volver a Productos
          </button>
          <button className="add-to-cart" onClick={() => addToCart({ ...product, quantity: 1 })}>
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default ProductDetail;
