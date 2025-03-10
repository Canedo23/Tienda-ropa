import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Firebase Authentication

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1kjdzxskRPdOeBc-Isz_kTUSbSiy7yhc",
  authDomain: "velvet-bloom-b1a79.firebaseapp.com",
  projectId: "velvet-bloom-b1a79",
  storageBucket: "velvet-bloom-b1a79.appspot.com",
  messagingSenderId: "432773924315",
  appId: "1:432773924315:web:3b8de5afff3c7f453bd3fe",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // Exporta la instancia de Auth