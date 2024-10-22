import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"; // Added signOut for handling logout

const firebaseConfig = {
  apiKey: "AIzaSyCLbBYbyyiRw7W1szhibnKQfKbZSuzOA9Y",
  authDomain: "auth1-67cb3.firebaseapp.com",
  projectId: "auth1-67cb3",
  storageBucket: "auth1-67cb3.appspot.com",
  messagingSenderId: "971704740330",
  appId: "1:971704740330:web:aa55be5c2b2c17b4b3ea93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export `auth` as named export, and `db` as default export
export { auth, signOut }; // Added signOut for easier usage in other components
export default db;



