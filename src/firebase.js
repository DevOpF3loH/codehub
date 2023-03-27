import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDzW13y7m82QSbgtuPzpLxd6OgkNXDPwQU",
  authDomain: "codehub-4191e.firebaseapp.com",
  projectId: "codehub-4191e",
  storageBucket: "codehub-4191e.appspot.com",
  messagingSenderId: "706261090124",
  appId: "1:706261090124:web:6516f1e1d6d4ca9b68d9e9",
  measurementId: "G-N0W26K0L16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
