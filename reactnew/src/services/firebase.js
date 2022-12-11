import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDkpYUhE9plSu7KdFTXAh06nvIqlxz_NVc",
  authDomain: "my-react-project-in-firebase.firebaseapp.com",
  projectId: "my-react-project-in-firebase",
  storageBucket: "my-react-project-in-firebase.appspot.com",
  messagingSenderId: "353745969248",
  appId: "1:353745969248:web:27d14480cfc02256226305"
};

const app = initializeApp(firebaseConfig);

export const firbaseAuth = getAuth(app)

export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(firbaseAuth, email, password)
}

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(firbaseAuth, email, password)
}

export const logOut = async () => await signOut(firbaseAuth)

const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const postsRef = ref(db, 'posts')
export const getPostById = (postID) => ref(db, `posts/${postID}`)