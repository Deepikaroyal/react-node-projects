// Import the functions you need from the SDKs you need
import "firebase/messaging";
import firebase from "firebase/app";
import localforage from "localforage";

// Your web app's Firebase configuration
const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {
      // Initialize the Firebase app with the credentials
      firebase?.initializeApp({
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        databaseURL: process.env.FIREBASE_DBURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_SENDER_MSGID,
        appId: process.env.FIREBASE_APPID,
      });
      try{
        const messaging = firebase.messaging();
        const tokenInLocalForage = await localforage.getItem("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
          // Get new token from Firebase
          const fcm_token = await messaging.getToken({
            vapidKey: "BBacTvglNyoorTjC_aiA90cCqKMpJYC3f3zj9haEB9s50NDwYTEqel4tNmYWQ4i2XjL920_S68GnLEhcWD-kP-o",
          });

          // Set token in our local storage
          if (fcm_token) {
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      }
      catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};
export { firebaseCloudMessaging };

// Initialize Firebase
// let firebaseApp
// if (!firebase.apps.length) {
//  firebaseApp = initializeApp(firebaseConfig);
//  console.log("@@@@@",initializeApp(firebaseConfig))
// }else {
//     firebase.app(); // if already initialized, use that one
//  }
// const messaging = getMessaging(firebaseApp);
//  if (firebase.apps.length === 0) {
//  const app =  firebase.initializeApp( firebaseConfig);

//  }

// const app = initializeApp(firebaseConfig);
//const  messaging = getMessaging(app)
// Initialize Firebase Cloud Messaging and get a reference to the service
//const  messaging = getMessaging(app)

// messaging.getToken({vapidKey: "BBacTvglNyoorTjC_aiA90cCqKMpJYC3f3zj9haEB9s50NDwYTEqel4tNmYWQ4i2XjL920_S68GnLEhcWD-kP-o"});
