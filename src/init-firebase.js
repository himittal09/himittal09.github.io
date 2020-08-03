let firebaseConfig = {
  apiKey: "AIzaSyCttiNBXhOZ_DnwbkF8T8SdcZcbAeX9smQ",
  authDomain: "portfolio-60c77.firebaseapp.com",
  databaseURL: "https://portfolio-60c77.firebaseio.com",
  projectId: "portfolio-60c77",
  storageBucket: "portfolio-60c77.appspot.com",
  messagingSenderId: "24486239812",
  appId: "1:24486239812:web:a6b36f739884d500e5a611"
};

firebase.setLogLevel('silent');

firebase.initializeApp(firebaseConfig);

// console.log(firebase);