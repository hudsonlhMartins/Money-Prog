import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpoDqO73hlQUQyUGXWJECZ_-3i4bLmbN4",
  authDomain: "moneyprog2-816b2.firebaseapp.com",
  projectId: "moneyprog2-816b2",
  storageBucket: "moneyprog2-816b2.appspot.com",
  messagingSenderId: "290540050102",
  appId: "1:290540050102:web:8cc3270c98b86340983817",
  measurementId: "G-978C5PD03M"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)