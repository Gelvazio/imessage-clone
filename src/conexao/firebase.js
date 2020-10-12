/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db