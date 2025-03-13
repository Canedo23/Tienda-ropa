import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase Auth
import { auth } from "../firebase-config"; // Importa Firebase Auth
import "../styles/login.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Por favor, ingresa tu correo electrónico y contraseña.");
      return;
    }

    try {
      // Iniciar sesión con Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
    
      // Llamar login con email y contraseña
      login(userCredential.user.email || "", formData.password);
    
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Correo electrónico o contraseña incorrectos.");
    }
    
  };

  return (
    <div className="login">
      <div className="login-img">
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
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Login;