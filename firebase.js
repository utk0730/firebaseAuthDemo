// Initialize Firebase
var config = {
    apiKey: "",
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
