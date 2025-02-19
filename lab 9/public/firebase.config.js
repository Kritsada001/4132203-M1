// firebase.config.js
const firebaseConfig = {
    apiKey: "AIzaSyDif8wqokMRvXkwybXz2F9w6BNEVcJiE3k",
    authDomain: "test41332202-2-67.firebaseapp.com",
    databaseURL: "https://test41332202-2-67-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test41332202-2-67",
    storageBucket: "test41332202-2-67.firebasestorage.app",
    messagingSenderId: "212924053643",
    appId: "1:212924053643:web:152000a8dda2e50890fc8e",
    measurementId: "G-ZSLJ7GWNHF"
};

// For service worker (firebase-messaging-sw.js)
// This ensures the config is available in both module and non-module contexts
if (typeof self !== 'undefined') {
    self.firebaseConfig = firebaseConfig;
}