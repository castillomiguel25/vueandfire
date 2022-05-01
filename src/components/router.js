import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import About from "@/views/About";
import Register from "@/views/Register";
import LoginView from "@/views/LoginView";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/About",
    name: "About",
    component: About,
  },

  {
    path: "/LoginView",
    name: "login",
    component: LoginView,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

 
  { 
      path: "/:catchAll(.*)",
      name: "error",
      component: Error
  },
  


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;