import "../styles/home.css"; // Importamos los estilos
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Sección Hero con imagen de fondo y botón */}
      <div className="hero">
        <button className="shop-button" onClick={() => navigate("/productos")}>
          Ver Productos
        </button>
      </div>

      {/* Nueva sección: Descripción y mapa */}
      <section className="info-section">
        <div className="description">
          <h2>Bienvenido a nuestra tienda</h2>
          <p>
            En nuestra tienda de ropa, encontrarás las últimas tendencias en moda
            urbana y deportiva. Ofrecemos una amplia variedad de productos, desde
            camisetas y sudaderas hasta chaquetas y accesorios. ¡Visítanos y
            descubre tu estilo único!
          </p>
        </div>
        <div className="map">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.1356453693697!2d-0.13661832352968975!3d51.51336237181465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876057a5d6079f7%3A0x9615c5b295ca9fbf!2zU3TDvHNzeQ!5e1!3m2!1ses-419!2ses!4v1741606100784!5m2!1ses-419!2ses" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;