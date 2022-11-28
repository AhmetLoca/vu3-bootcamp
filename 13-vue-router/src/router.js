import { createRouter, createWebHashHistory } from "vue-router";
//import About from "@/views/About.vue";
//import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    //component: Home,
    component: () => import("@/views/HomePage.vue"),
  },

  {
    path: "/about",
    //component: Home,
    component: () => import("@/views/AboutPage.vue"), // lazy loading
  },
];

const router = createRouter({
  //ECMAScript kendisi aciyor. routes :routes
  routes,
  // history modu nedir?
  history: createWebHashHistory(),
});

export default router;
