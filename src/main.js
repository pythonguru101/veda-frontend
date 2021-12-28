import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App.vue";
import Login from "./views/Login.vue";
import Registration from "./views/Registration.vue";
import Home from "./views/Home.vue";
import "./styles/global.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    authenticated: false,
    toastText: "",
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
    toastMessage(state, param) {
      state.toastText = param;
    },
  },
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
  ],
});

new Vue({
  el: "#app",
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
