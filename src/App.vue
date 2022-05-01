<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight"></span>
      </div>
      <div class="block lg:hidden"></div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm  lg:flex-grow">
          <router-link
            to="/register"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dark mr-4"
          >
            Register
          </router-link>
      
           <router-link
            to="/LoginView"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dark mr-4"
          >
            Login
          </router-link>

           <button @click="SignOut" v-if="isLoggedIn">Sign Out</button>
        </div>
      </div>
    </nav>

   
    

    <router-view />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const SignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>
