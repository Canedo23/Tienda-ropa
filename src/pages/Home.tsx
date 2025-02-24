import "../styles/home.css"; // Importamos los estilos

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Bienvenido a la Tienda de Ropa 🛍️</h1>
        <p>Explora nuestras mejores colecciones.</p>
        <button className="shop-button">Ver Productos</button>
      </section>

      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-list">
          <div className="category-item">👕 Hombre</div>
          <div className="category-item">👗 Mujer</div>
          <div className="category-item">🔥 Ofertas</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
