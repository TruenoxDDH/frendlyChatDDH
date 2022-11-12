/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

 import { initializeApp } from "firebase/app";
 
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyBtox3yFOO9jaMNo9hgNEb3uK_rUbmDQbk",
  authDomain: "chatamigabl.firebaseapp.com",
  projectId: "chatamigabl",
  storageBucket: "chatamigabl.appspot.com",
  messagingSenderId: "911822187871",
  appId: "1:911822187871:web:ed05831676342afb3ddaea"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
