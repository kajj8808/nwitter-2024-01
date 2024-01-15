import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqpM0DyYc3Nj4eVzuSKcTIzk3yd5kNVQE",
  authDomain: "nwitter-chat.firebaseapp.com",
  projectId: "nwitter-chat",
  storageBucket: "nwitter-chat.appspot.com",
  messagingSenderId: "507680780497",
  appId: "1:507680780497:web:cc8e34f7bcedeed96c15f0",
  measurementId: "G-RF7RGDPXM2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
