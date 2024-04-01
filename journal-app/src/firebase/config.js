// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//console.log(import.meta.env);
//console.log(process.env);

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnviroments();


// Your web app's Firebase configuration
// dev/prod
// const firebaseConfig = {
//   apiKey: "AIzaSyBXWeracX8arB8qYlHYm1NI7aIe0YqIJPU",
//   authDomain: "react-cursos-d2400.firebaseapp.com",
//   projectId: "react-cursos-d2400",
//   storageBucket: "react-cursos-d2400.appspot.com",
//   messagingSenderId: "63222807916",
//   appId: "1:63222807916:web:fe38102ec16ebeff570749"
// };

//testing
// const firebaseConfig = {
//   apiKey: "AIzaSyAIF6YRYeYTeeOpGP2vRuUGnF6eQZjftYc",
//   authDomain: "react-curso-testing-8e2db.firebaseapp.com",
//   projectId: "react-curso-testing-8e2db",
//   storageBucket: "react-curso-testing-8e2db.appspot.com",
//   messagingSenderId: "1078170343159",
//   appId: "1:1078170343159:web:3607c67b55cc475a1025f2"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB =  getFirestore(FirebaseApp);