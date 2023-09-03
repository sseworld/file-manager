import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCXFZuIrZgbPWpZipqY1UVOKNBl1havo2E",
    authDomain: "file-manager-using-firebase.firebaseapp.com",
    projectId: "file-manager-using-firebase",
    storageBucket: "file-manager-using-firebase.appspot.com",
    messagingSenderId: "766468842349",
    appId: "1:766468842349:web:05ace1cfd10e31fe73f064"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
