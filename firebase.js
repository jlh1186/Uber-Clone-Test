// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaMnu1IBgxu9FsnVmlVlEq46oY3LJIUgM",
  authDomain: "uber-next-clone-live-ed365.firebaseapp.com",
  projectId: "uber-next-clone-live-ed365",
  storageBucket: "uber-next-clone-live-ed365.appspot.com",
  messagingSenderId: "119308679840",
  appId: "1:119308679840:web:d47ccbeba10a7d7a1f27c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()


export {app, provider, auth}