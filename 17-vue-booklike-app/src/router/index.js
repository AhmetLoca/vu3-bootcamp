import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
