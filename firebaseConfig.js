import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Certifique-se de que o AsyncStorage está importado
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAODFOJJXER2gpUdKWoXvVFhlSW7sNkOm8',
  authDomain: 'receitas-cb7ae.firebaseapp.com',
  projectId: 'receitas-cb7ae',
  storageBucket: 'receitas-cb7ae.appspot.com',
  messagingSenderId: '298760423289',
  appId: '1:298760423289:web:66dd738204d8fa7cfcd1a8',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const firestore = getFirestore(app);

export { auth, firestore, createUserWithEmailAndPassword, doc, setDoc };
