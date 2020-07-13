import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBlnYHQmmaqPZ7qNbLneUMbyICDnjbHMx4",
  authDomain: "slack-react-78082.firebaseapp.com",
  databaseURL: "https://slack-react-78082.firebaseio.com",
  projectId: "slack-react-78082",
  storageBucket: "slack-react-78082.appspot.com",
  messagingSenderId: "671550689790",
  appId: "1:671550689790:web:000a1a48e269ce607eb0af"
};
firebase.initializeApp(config);

export default firebase;
