import Vue from "vue";
import Router from "vue-router";
import Home from "../views/HomePage.vue";
import Info from "../views/Info.vue";
import Code from "../views/CodePage.vue";
import RegisterPage from "@/views/authentication/RegisterPage.vue";
import CodeTheory from "@/views/CodeTheory.vue";

Vue.use(Router);

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
      component: Code,
      props: true,
      children: [
        {
          path: "/code/:name/theory",
          name: "codeTheory",
          component: CodeTheory
        }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage
    }
  ]
});
