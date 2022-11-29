import { createRouter, createWebHashHistory } from "vue-router";
//import About from "@/views/About.vue";
//import Home from "@/views/Home.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    //component: Home,
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "AboutPage",
    path: "/about",
    //component: Home,
    component: () => import("@/views/AboutPage.vue"), // lazy loading
  },
  {
    name: "DetailsPage",
    path: "/details/:id",
    //component: Home,
    component: () => import("@/views/DetailsPage.vue"), // lazy loading
  },
];

const router = createRouter({
  //ECMAScript kendisi aciyor. routes :routes
  routes,
  // history modu nedir?
  //history:createWebHistory()
  history: createWebHashHistory(),
});

export default router;
