import "../styles/footer.css"; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Stüssy. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/politica-de-privacidad">Política de Privacidad</a>
          <a href="/terminos-y-condiciones">Términos y Condiciones</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;