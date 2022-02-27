import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDRXMIfcW9mjES7lhlLDSl7r7lCBKeLnz4",
  authDomain: "shoppinglist-9a958.firebaseapp.com",
  projectId: "shoppinglist-9a958",
  storageBucket: "shoppinglist-9a958.appspot.com",
  messagingSenderId: "1056273696717",
  appId: "1:1056273696717:web:b74e07442a6a17cb7f6684",
  measurementId: "G-FDRJ6YYEYM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-15');
function writeDailySpecial(){
const docData = {
  description: 'A delicious vanilla latte',
  price: 3.99,
  milk: 'Whole',
  vegan: false,
};
setDoc(specialOfTheDay, docData);
}

console.log('Hello there, Firestore!');
writeDailySpecial();


// const messaging = getMessaging(app);
// onMessage.requestPermissions().then(function() {
//   console.log('Have permission');
// }).catch(function(err){console.log('Error Occured.')})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
