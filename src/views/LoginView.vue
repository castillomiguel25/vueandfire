<template>
  <h1>Sign In to an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("iniciar sesión con éxito!");
      console.log(auth.currentUser);
      router.push("/About");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/user-not-found":
          errMsg.value = "contraseña o correo electronico incorrecto";
          break;
      }
    });
};
</script>
