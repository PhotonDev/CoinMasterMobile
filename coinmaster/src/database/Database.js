import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDpJQwIZE3ze6nn8sM_ArQ2aabFWxlWQe0",
    authDomain: "coinmaster-401f2.firebaseapp.com",
    databaseURL: "https://coinmaster-401f2.firebaseio.com",
    projectId: "coinmaster-401f2",
    storageBucket: "",
    messagingSenderId: "794282949696"
};

const firebaseApp = firebase.initializeApp (config);

export default class Database {

    static staticKitsRef = firebase.database ().ref('statickits');
    static overdosesRef  = firebase.database ().ref('overdoses');

    static listenForItems(itemsRef, callback) {
        let items = [];
        // console.log (Database.staticKitsRef);

        return itemsRef.on('value', (snapshot) => {

            var location = "";

            if (snapshot.val ()) {
                let val = snapshot.val ();
                let item;
                for (item in val) {
                    items.push(val[item]);
                }
                callback (items);
            }

        });
      }

    async signup(email, pass) {
        try {
            await firebase.auth().
                createUsserWithEmailAndPassword(email, pass);

            console.log("Account created");

            // Navigate to home page, user is auto logged in
        } catch (error) {
            console.log(error.toString());
        }
    }

    static async login(email, pass) {
        try {
            await firebase.auth().
                signInWithEmailAndPassword(email, pass);

            console.log("Logged in");

            // Navigate to home page, after login
        } catch (error) {
            console.log(error.toString());
        }
    }

    async logout() {
        try {
            await firebase.auth().signOut();

            // Navigate to login component
        } catch (error) {
            console.log(error.toString());
        }
    }


}