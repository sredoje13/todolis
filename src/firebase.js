// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCfIOTu_dlekm1iXzDD0y7ASYdmWHz7ZHU",
  authDomain: "todolist-1da37.firebaseapp.com",
  databaseURL: "https://todolist-1da37-default-rtdb.firebaseio.com",
  projectId: "todolist-1da37",
  storageBucket: "todolist-1da37.appspot.com",
  messagingSenderId: "423051703940",
  appId: "1:423051703940:web:d22941be9a23df027eb4d1",
  measurementId: "G-PFPMY54NKL"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider()
export const singInwithgoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
     console.log(result)
     const name=result.user.displayName;
     const email=result.user.email;
     const photo=result.user.photoURL
    }).catch((error)=>console.log(error))
}
