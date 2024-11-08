// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOeMfqJdtz8hhutYuIlJfTaPgFvGr3myY",
  authDomain: "proyectofinal-f117f.firebaseapp.com",
  projectId: "proyectofinal-f117f",
  storageBucket: "proyectofinal-f117f.firebasestorage.app",
  messagingSenderId: "568178049139",
  appId: "1:568178049139:web:fab2c7df51ccf23fa16a06",
  measurementId: "G-817W27ZP2P"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { app, db };
