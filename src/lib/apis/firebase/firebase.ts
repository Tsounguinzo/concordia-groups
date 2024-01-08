import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {FIREBASE_CONFIG_API} from "$env/static/private";


const firebaseConfig = {
  apiKey: FIREBASE_CONFIG_API,
  authDomain: "concordia-groups.firebaseapp.com",
  projectId: "concordia-groups",
  storageBucket: "concordia-groups.appspot.com",
  messagingSenderId: "750631507507",
  appId: "1:750631507507:web:c8d96b0beb8dc69a0e3546"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();