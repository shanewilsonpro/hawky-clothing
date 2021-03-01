import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDg6759pnBzNzU_sr4JYP3nVoumU9VpN9g",
    authDomain: "hawky-clothing-db.firebaseapp.com",
    projectId: "hawky-clothing-db",
    storageBucket: "hawky-clothing-db.appspot.com",
    messagingSenderId: "1044833302695",
    appId: "1:1044833302695:web:c53d8bc788cfce88248382",
    measurementId: "G-HJX08NP9CR"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc('users/' + userAuth.uid);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;