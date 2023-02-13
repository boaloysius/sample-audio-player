import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyAhU6oyhtGV0FkK3z37qfJsf1mnR-RrG6U",
  authDomain: "player-2e63d.firebaseapp.com",
  projectId: "player-2e63d",
  storageBucket: "player-2e63d.appspot.com",
  messagingSenderId: "1000849771160",
  appId: "1:1000849771160:web:6771c56ee400d6b1a41eed",
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;
