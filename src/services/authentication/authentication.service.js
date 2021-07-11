import * as firebase from "firebase";

export const loginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registerRequest = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const checkAuthRequest = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user);
        });
    });
};

export const logoutResquest = () => {
    return firebase.auth().signOut();
};