import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDH1jU6fa2vaaGwLLZJud6r_WWKV7AMTY",
  authDomain: "quiz-app-da277.firebaseapp.com",
  projectId: "quiz-app-da277",
  storageBucket: "quiz-da277.appspot.com",
  messagingSenderId: "480089552527",
  appId: "1:480089552527:web:9f2083aa4b15bf616f62fa",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("TOKEN");
            console.log(currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
