import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';
import * as firebase from 'firebase';
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyCdeI7Ad_GH1PmRpBa_L4QQDbzOVH56dJI",
  authDomain: "triple-triad-f51dc.firebaseapp.com",
  databaseURL: "https://triple-triad-f51dc.firebaseio.com",
  projectId: "triple-triad-f51dc",
  storageBucket: "triple-triad-f51dc.appspot.com",
  messagingSenderId: "1080121603949",
  appId: "1:1080121603949:web:1b460a6e47d145df9bcc64"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
