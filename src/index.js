import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyA_u_mJXxLr_wIg6V1P7Bv3Pa7kkEMyOIs",
  authDomain: "react-video-call-a1571.firebaseapp.com",
  projectId: "react-video-call-a1571",
  storageBucket: "react-video-call-a1571.appspot.com",
  messagingSenderId: "228848045328",
  appId: "1:228848045328:web:88a67c2d59b9ab37e22995",
  measurementId: "G-FXGMYK5G18",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
