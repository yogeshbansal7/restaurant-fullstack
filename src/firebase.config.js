import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCk5PT-Z7xgtDC0Bisrpbcd8ud470hjH1U",
    authDomain: "restaurantapp-c1626.firebaseapp.com",
    databaseURL: "https://restaurantapp-c1626-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c1626",
    storageBucket: "restaurantapp-c1626.appspot.com",
    messagingSenderId: "214249956990",
    appId: "1:214249956990:web:f0d83be319ae6a1b2dda2f"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};