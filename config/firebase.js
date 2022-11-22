import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoEQ8sXQbSUqNcocu97xa46vhfrqVmbc0",
  authDomain: "chave-roda-44a17.firebaseapp.com",
  projectId: "chave-roda-44a17",
  storageBucket: "chave-roda-44a17.appspot.com",
  messagingSenderId: "528738287553",
  appId: "1:528738287553:web:c6a38556f29b5abacc3940",
  measurementId: "G-ZC4LBJQSW0"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { auth }