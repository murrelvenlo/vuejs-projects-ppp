import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkBbFpKEx__MASKptSJzvvuBNcVPWfaJ0',
  authDomain: 'music-14468.firebaseapp.com',
  projectId: 'music-14468',
  storageBucket: 'music-14468.appspot.com',
  appId: '1:823536191397:web:6fddf1316b49672a23ca4c'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
