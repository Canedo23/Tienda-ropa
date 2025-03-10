import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"; // Importa Firestore
import { db } from "../firebase-config"; // Importa la instancia de Firestore
import "../styles/login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    try {
      // Verificar si el correo existe en Firestore
      const userRef = doc(db, "users", formData.email);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        // Si el usuario existe, iniciar sesión
        const userData = userDoc.data();
        login(userData.email);
        navigate("/");
      } else {
        setError("El correo electrónico no está registrado.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Ocurrió un error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;