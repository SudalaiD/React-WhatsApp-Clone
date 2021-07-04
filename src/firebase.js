import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBLpK6tATuLwozq-omiTigW3ZwxwCWVWGI",
  authDomain: "whatsapp-clone-921b4.firebaseapp.com",
  projectId: "whatsapp-clone-921b4",
  storageBucket: "whatsapp-clone-921b4.appspot.com",
  messagingSenderId: "727565433448",
  appId: "1:727565433448:web:1743204746a94d5d6719dd",
  measurementId: "G-MM3VC41TS7"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider =  new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db