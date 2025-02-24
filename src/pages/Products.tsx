import { useState, useEffect } from "react";
import "../styles/products.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const mockProducts: Product[] = [
      { id: 1, name: "Camiseta Blanca", price: 19.99, image: "/img/camiseta1.jpg", category: "camisas" },
      { id: 2, name: "Jeans Clásicos", price: 39.99, image: "/img/jeans.jpg", category: "pantalones" },
      { id: 3, name: "Chaqueta Negra", price: 59.99, image: "/img/chaqueta.jpg", category: "chaquetas" },
      { id: 4, name: "Zapatillas Deportivas", price: 49.99, image: "/img/zapatillas.jpg", category: "zapatos" },
      { id: 5, name: "Bolso Casual", price: 29.99, image: "/img/bolso.jpg", category: "accesorios" },
      { id: 6, name: "Reloj Moderno", price: 89.99, image: "/img/reloj.jpg", category: "accesorios" }
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    filterProducts(e.target.value, category, priceRange);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    filterProducts(search, e.target.value, priceRange);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    filterProducts(search, category, [min, max]);
  };

  const filterProducts = (searchText: string, selectedCategory: string, priceRange: [number, number]) => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Productos</h1>
      <input type="text" placeholder="Buscar..." value={search} onChange={handleSearch} />
      <select onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        <option value="camisas">Camisas</option>
        <option value="pantalones">Pantalones</option>
        <option value="zapatos">Zapatos</option>
        <option value="accesorios">Accesorios</option>
      </select>
      <div>
        <input type="range" min="0" max="1000" value={priceRange[0]} onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])} />
        <input type="range" min="0" max="1000" value={priceRange[1]} onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))} />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      {hasMore && <button onClick={() => setPage(page + 1)}>Cargar más</button>}
    </div>
  );
};

export default ProductsPage;
