import { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "./AuthContext"; // Importamos el contexto de autenticación

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;  // 🔹 Agregamos la propiedad `image`
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void; // 🔹 Agregamos `updateQuantity`
  clearCart: () => void;
  totalPrice: number; // 🔹 Agregamos `totalPrice`
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const [cart, setCart] = useState<Product[]>([]);

  // 🔹 Función para agregar al carrito
  const addToCart = (product: Product) => {
    if (!isLoggedIn) {
      alert("Debes iniciar sesión para agregar productos al carrito.");
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 🔹 Función para actualizar la cantidad de un producto
  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // 🔹 Función para calcular el total del carrito
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 🔹 Función para eliminar un producto del carrito
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // 🔹 Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
