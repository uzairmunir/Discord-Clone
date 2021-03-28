import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5TZ04HL_WfioXHKxNuUyD3QgwKcp_CJY',
  authDomain: 'discord-clone-635ff.firebaseapp.com',
  projectId: 'discord-clone-635ff',
  storageBucket: 'discord-clone-635ff.appspot.com',
  messagingSenderId: '400996896409',
  appId: '1:400996896409:web:13937fab6c05dba1a3b208',
  measurementId: 'G-LQHMKWV3KV',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
