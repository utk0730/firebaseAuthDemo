// Initialize Firebase
var config = {
    apiKey: "AIzaSyD1F5oei4x-SzMpunJgZVF4ZGmwpr6C0X0",
    authDomain: "fir-demoproject-905a7.firebaseapp.com",
    databaseURL: "https://fir-demoproject-905a7.firebaseio.com",
    projectId: "fir-demoproject-905a7"
  };
  firebase.initializeApp(config);

  //make auth & firestore references
  const auth = firebase.auth()
  const db = firebase.firestore()

  //update firestore settings
  db.settings({ timestampsInSnapshots: true });
  console.log(firebase)