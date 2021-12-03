import fb from 'firebase/app'
import 'firebase/firestore'

import { Shop } from '../types/shop'

// 画面初期化
const firebaseConfig = {
  apiKey: 'AIzaSyC5KZ7VyArnPFJ3H3ZFkpLaTT5iTvOkR0o',
  authDomain: 'expo-app-dev.firebaseapp.com',
  projectId: 'expo-app-dev',
  storageBucket: 'expo-app-dev.appspot.com',
  messagingSenderId: '118685900313',
  appId: '1:118685900313:web:d62b0217c844c56e7dd488',
  measurementId: 'G-DEQ347PELF',
}
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
export const firestore = firebase.firestore()

export const getShopList = async () => {
  const snapshot = await firestore.collection('shops').get()
  const shopList = snapshot.docs.map((doc) => doc.data() as Shop)
  return shopList
}
