import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { auth } from "../firebase-config"; // Firebase Auth
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  fetchSignInMethodsForEmail
} from "firebase/auth";

interface User {
  email: string;
  username: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  register: (email: string, password: string, username: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Escuchar cambios en la autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({ email: firebaseUser.email || "", username: "" }); // Puedes cargar el username desde Firestore
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ REGISTRAR USUARIO (VERIFICA SI EL EMAIL YA ESTÁ REGISTRADO)
  const register = async (email: string, password: string, username: string) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        alert("⚠️ Este correo ya está registrado. Intenta iniciar sesión.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser({ email: userCredential.user.email || "", username });
      setIsLoggedIn(true);
      alert("✅ Registro exitoso");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("⚠️ Este correo ya está registrado. Intenta iniciar sesión.");
      } else {
        alert(`⚠️ Error al registrar: ${error.message}`);
      }
      console.error("Error al registrar usuario:", error);
    }
  };

  // ✅ INICIAR SESIÓN
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser({ email: userCredential.user.email || "", username: "" });
      setIsLoggedIn(true);
      alert("✅ Inicio de sesión exitoso");
    } catch (error: any) {
      alert(`⚠️ Error al iniciar sesión: ${error.message}`);
      console.error("Error al iniciar sesión:", error);
    }
  };

  // ✅ CERRAR SESIÓN
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsLoggedIn(false);
      alert("✅ Sesión cerrada exitosamente");
    } catch (error: any) {
      alert(`⚠️ Error al cerrar sesión: ${error.message}`);
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
