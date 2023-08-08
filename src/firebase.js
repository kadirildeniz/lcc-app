import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQCz8FxYWhih4zU3aD2gebXmFmzN83Gwg",
  authDomain: "react-chat-app-a0b95.firebaseapp.com",
  projectId: "react-chat-app-a0b95",
  storageBucket: "react-chat-app-a0b95.appspot.com",
  messagingSenderId: "135491846952",
  appId: "1:135491846952:web:4d1eadbe35186cc58b461d"
};

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore();

  export{ auth, provider, db }