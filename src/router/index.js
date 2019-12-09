import Vue from "vue";
import Router from "vue-router";
import Home from "../views/HomePage.vue";
import Info from "../views/InfoPage.vue";
import Code from "@/views/code/Code.vue";
import RegisterPage from "@/views/authentication/RegisterPage.vue";
import UserPage from "@/views/UserPage.vue";
import UserResults from "../components/user/UserResults";

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
      props: true
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserPage,
      children: [
        {
          path: "results",
          name: "user-results",
          component: UserResults
        }
      ]
    }
  ]
});
