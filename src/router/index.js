import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";
import Home from "../views/Home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Registration,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("./login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
