import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Code from "../views/Code.vue";
import RegisterPage from "@/views/authentication/RegisterPage.vue";

Vue.use(Router);

//ad

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/info",
      name: "info",
      component: Info
    },
    {
      path: "/code/:name",
      name: "code",
      component: Code
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage
    }
  ]
});
