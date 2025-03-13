import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isAdult = (birthDate: string): boolean => {
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    return age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.username || !formData.password || !formData.firstName || !formData.lastName || !formData.birthDate) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!isAdult(formData.birthDate)) {
      setError("Debes ser mayor de 18 años para registrarte.");
      return;
    }

    try {
      await register(formData.email, formData.password, formData.username);
      navigate("/"); // Redirige al Home después del registro
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setError("Error al registrar el usuario. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>Registro</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Apellidos" value={formData.lastName} onChange={handleChange} />
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
          <input type="text" name="username" placeholder="Nombre de usuario" value={formData.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
