import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from 'react-hot-toast';


const firebaseConfig = {
  apiKey: "AIzaSyAEe0ZxDNvLtaPmCJcPR6jtjTAQhHrzU6A",
  authDomain: "deneme-ebb3d.firebaseapp.com",
  projectId: "deneme-ebb3d",
  storageBucket: "deneme-ebb3d.appspot.com",
  messagingSenderId: "783761580738",
  appId: "1:783761580738:web:3c8b2b95cf1c541e75115b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    return user
  }
  
  catch(error){
    toast.error(error.message)
  }
}

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  }catch(error){
    toast.error(error.message)
  }
}


export const logout = async (email, password) => {
  try {
    await signOut(auth)
    return true
  }catch(error){
    toast.error(error.message)
  }
}

export default app;