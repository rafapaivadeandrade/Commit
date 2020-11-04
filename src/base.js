const config = {
  apiKey: "AIzaSyAzxsVNEehs001JH1Nkc6F19laTeznPV2E",
  authDomain: "market-49096.firebaseapp.com",
  databaseURL: "https://market-49096.firebaseio.com",
  projectId: "market-49096",
  storageBucket: "gs://market-49096.appspot.com",
  messagingSenderId: "249005968179",
  appId: "1:249005968179:web:62230ee5f48a3805e74c46",
  measurementId: "G-RJVLRXBJ84",
};

const Rebase = require("re-base");
const firebase = require("firebase/app");
require("firebase/database");
require("firebase/storage");

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const storage = app.storage();

export default base;
