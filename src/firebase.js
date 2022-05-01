// import { initializeApp } from "firebase/app";
// import { computed, onMounted, onUnmounted, ref } from "vue";

// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// // import { getFirestore } from "firebase/firestore";

//  export const firebaseApp = initializeApp({

//     apiKey: "AIzaSyDN2j1HtFtmowKTc7GBAnz3fJOploE7yxs",
  
//     authDomain: "login-3ca23.firebaseapp.com",
  
//     projectId: "login-3ca23",
  
//     storageBucket: "login-3ca23.appspot.com",
  
//     messagingSenderId: "856405946798",
  
//     appId: "1:856405946798:web:4f367c44a6282de26d983f",
  
//     measurementId: "G-HWH5M9HZ5B"
  
//   });
  

//   export const useAuthState = () => {
//     const user = ref(null);
//     const error = ref(null);
//     const auth = getAuth();
//     let unsubscribe;
//     onMounted(() => {
//       unsubscribe = onAuthStateChanged(
//         auth,
//         u => (user.value = u),
//         e => (error.value = e)
//       );
//     });
//     onUnmounted(() => unsubscribe());
  
//     const isAuthenticated = computed(() => user.value != null);
//     return { user, error, isAuthenticated };
//   };
  
//   export const useSignOut = async () => {
//     try {
//       const auth = getAuth();
//       await signOut(auth);
//     } catch (e) {
//       alert(e.message);
//     }
//   };
  
//   export const getUserState = () =>
//     new Promise((resolve, reject) =>
//       onAuthStateChanged(getAuth(), resolve, reject)
//     );