import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase Auth
import { doc, setDoc } from "firebase/firestore"; // Firestore
import { auth, db } from "../firebase-config"; // Importa Firebase Auth y Firestore
import "../styles/register.css";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "", // Nuevo campo: Nombre
    lastName: "", // Nuevo campo: Apellidos
    birthDate: "", // Nuevo campo: Fecha de nacimiento
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
    
    // Verifica si ya cumplió años en el año actual
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
      // 1. Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2. Guardar la información adicional en Firestore
      const userRef = doc(db, "users", userCredential.user.uid); // Usamos el UID como ID
      await setDoc(userRef, {
        email: formData.email,
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
      });

      // 3. Actualizar el estado de autenticación
      register(formData.email, formData.username);

      // 4. Redirigir al Home
      navigate("/"); // Redirige a la ruta "/"
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
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Apellidos"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
