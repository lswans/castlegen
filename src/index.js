import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'openai';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLC41g3i9AtXFxcOblu1OxLk_fK7HsinU",
  authDomain: "castlegen.firebaseapp.com",
  projectId: "castlegen",
  storageBucket: "castlegen.appspot.com",
  messagingSenderId: "906682622388",
  appId: "1:906682622388:web:17a08db636d28e25f192e1",
  measurementId: "G-8YYWXHQDTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//require('dotenv').config();

//console.log(process.env) // remove this after you've confirmed it is working
//const OpenAI = require('openai');
//const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
