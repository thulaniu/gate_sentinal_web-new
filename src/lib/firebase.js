import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBk9bwBn3_wtVe3vyqn_BJrql_zIiQzuq8",
  authDomain: "gatesentinal.firebaseapp.com",
  databaseURL: "https://gatesentinal-default-rtdb.firebaseio.com",
  projectId: "gatesentinal",
  storageBucket: "gatesentinal.firebasestorage.app",
  messagingSenderId: "764593377955",
  appId: "1:764593377955:web:b57558520935bd7ceca516",
  measurementId: "G-TGNY4TKJ3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app) 

export { db }
