import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { auth } from "../firebase-config"; // Importa Firebase Auth
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"; // Para escuchar cambios de autenticación

interface User {
  email: string;
  username: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  register: (email: string, username: string) => void;
  login: (email: string) => void;
  logout: () => void;
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

  const register = (email: string, username: string) => {
    setUser({ email, username });
    setIsLoggedIn(true);
  };

  const login = (email: string) => {
    setUser({ email, username: "" }); // Puedes cargar el username desde Firestore
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
    setIsLoggedIn(false);
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