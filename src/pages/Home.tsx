import "../styles/home.css"; // Importamos los estilos
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 7, name: "SKULLCAP NUMBER 4", price: 40, image: "../../public/img/GorroStussy.webp" },
  { id: 8, name: "BLAZER TEXTURED LINEN", price: 285, image: "../../public/img/AmericanaStussy.webp" },
  { id: 9, name: "DUSTER COAT", price: 350, image: "../../public/img/GabardinaStussy.webp" },
  { id: 10, name: "LANDON SUNGLASSES", price: 160, image: "../../public/img/GafasStussy.webp" },
  { id: 11, name: "METAL VENUS LIGHTER", price: 32, image: "../../public/img/MecheroStussy.webp" },
  { id: 12, name: "SWIRLY S MONEY CLIP", price: 45, image: "../../public/img/ClipStussy.webp" }
];

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

      {/* Nueva sección: Descripción centrada */}
      <section className="description-section">
        <h2>Bienvenido a Stüssy</h2>
        <p>
        Moda sin esfuerzo, actitud sin límites. En Stüssy, combinamos lo mejor del diseño urbano 
        con un toque sofisticado. Sudaderas, gafas, gorros, pantalones y más prendas creadas para quienes saben 
        que el estilo no sigue reglas, lo define quien lo lleva.</p>
        <p>
        Materiales premium, cortes relajados y detalles que marcan la diferencia. No es solo ropa, es una declaración.
        </p>
        
      </section>

      <section className="featured-products">
        <h2>Productos Limitados</h2>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="featured-card">
              <Link to={`/producto/${product.id}`}>
                <img src={product.image} alt={product.name} className="featured-image" />
                <h3 className="featured-name">{product.name}</h3>
                <p className="featured-price">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Sección del mapa al final */}
      <section className="map-section">
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