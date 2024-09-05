import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4xtz_KMaAqw31LGduGEw614v3-AoDypM",
  authDomain: "app-agenda-conectnet.firebaseapp.com",
  projectId: "app-agenda-conectnet",
  storageBucket: "app-agenda-conectnet.appspot.com",
  messagingSenderId: "212243071956",
  appId: "1:212243071956:web:b984d00b79118f09bdcc41",
  measurementId: "G-HSX4EJ1QMK",
};

// inicia o firebase
const app = initializeApp(firebaseConfig);

// inicia o banco de dados firestore e retorna a referencia do banco
const db = getFirestore(app);

export default db;
