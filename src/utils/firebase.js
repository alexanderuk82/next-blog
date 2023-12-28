// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API,
	authDomain: "blogmedium-25ed6.firebaseapp.com",
	projectId: "blogmedium-25ed6",
	storageBucket: "blogmedium-25ed6.appspot.com",
	messagingSenderId: "933621530130",
	appId: "1:933621530130:web:612c58eb4722dd3cb2e2cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
