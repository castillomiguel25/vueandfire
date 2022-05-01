import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "@/components/router.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: 'AIzaSyDN2j1HtFtmowKTc7GBAnz3fJOploE7yxs',
  
    authDomain: 'login-3ca23.firebaseapp.com',
  
    projectId: 'login-3ca23',
  
    storageBucket: 'login-3ca23.appspot.com',
  
    messagingSenderId: '856405946798',
  
    appId: '1:856405946798:web:4f367c44a6282de26d983f',
  
    measurementId: 'G-HWH5M9HZ5B'
  
  };
  
  

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
