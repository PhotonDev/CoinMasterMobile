import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDpJQwIZE3ze6nn8sM_ArQ2aabFWxlWQe0",
    authDomain: "coinmaster-401f2.firebaseapp.com",
    databaseURL: "https://coinmaster-401f2.firebaseio.com",
    projectId: "coinmaster-401f2",
    storageBucket: "coinmaster-401f2.appspot.com",
    messagingSenderId: "794282949696"
};

const firebaseApp = firebase.initializeApp (config);

export default class Database {

    // static staticKitsRef = firebase.database ().ref('statickits');
    // static overdosesRef  = firebase.database ().ref('overdoses');

    static currentUser = undefined;

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

    static async signup(email, pass, successCallback, failureCallback) {
        await firebase.auth().createUserWithEmailAndPassword(email, pass).then(function(user) {
            console.log("Account created");
            Database.currentUser = firebase.auth().currentUser;
            Database.sendVerificationEmail ();
            successCallback(user);
        }).catch(function(error) {
            console.log(error.toString());
            const { errorCode, errorMessage } = error;
            console.log (errorCode);
            console.log (errorMessage);
            failureCallback();
        });
    }

    static async sendVerificationEmail () {
        if (!Database.currentUser.emailVerified) {
            console.log ("IS USER VERIFED");
            console.log (Database.currentUser.emailVerified);
            Database.currentUser.sendEmailVerification().then (function () {
                console.log ("email sent");
            }).catch (function (error) {
                console.log (error);
            });
        }
    }

    static async login(email, pass, successCallback, failureCallback) {
        await firebase.auth().
            signInWithEmailAndPassword(email, pass).then (function (user) {
                console.log("Logged in");
                console.log(user);
                console.log(user.emailVerified);

                Database.currentUser = user;

                if (!user.emailVerified) {
                    Database.sendVerificationEmail ();
                }
                // Navigate to home page, after login
                successCallback ();
            }).catch(function (error) {
                console.log(error.toString());
                const { errorCode, errorMessage } = error;
                console.log (errorCode);
                console.log (errorMessage);
                failureCallback();
            });
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