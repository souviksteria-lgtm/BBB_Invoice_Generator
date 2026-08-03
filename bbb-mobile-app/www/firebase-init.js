// Shared Firebase client init - real-time catalogue backend (Firestore).
// TODO: paste your firebaseConfig from Firebase Console > Project settings > General > Your apps > Web app.
// Must match the config used in the root firebase-init.js so web + app share the same data.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnxqacbckPXUIATK3k7uwJ_jwd2702Lzc",
  authDomain: "beyondblissfulbakes.firebaseapp.com",
  projectId: "beyondblissfulbakes",
  storageBucket: "beyondblissfulbakes.firebasestorage.app",
  messagingSenderId: "396139573913",
  appId: "1:396139573913:web:29a65948caf4297e9c7e08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// Anonymous sign-in lets Firestore rules tell "app visitor" apart from unauthenticated requests
const authReady = signInAnonymously(auth).catch(err => console.error('Firebase anonymous sign-in failed:', err));

const CATALOGUE_COLLECTION = 'catalogueItems';

window.fetchCatalogueFromFirestore = async function () {
  await authReady;
  const snap = await getDocs(collection(db, CATALOGUE_COLLECTION));
  return snap.docs.map(d => d.data());
};

window.addCatalogueItemToFirestore = async function (item, adminKey) {
  await authReady;
  return addDoc(collection(db, CATALOGUE_COLLECTION), { ...item, adminKey });
};
