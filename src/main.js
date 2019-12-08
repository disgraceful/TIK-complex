import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index.js";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBgp1_cW2WRjH5nMP3F4KqfkBbp3flG_z8",
      authDomain: "tik-test-7c713.firebaseapp.com",
      databaseURL: "https://tik-test-7c713.firebaseio.com",
      projectId: "tik-test-7c713",
      storageBucket: "tik-test-7c713.appspot.com",
      messagingSenderId: "10598160771",
      appId: "1:10598160771:web:294141ae2c0784b7bf7eb6"
    });
  }
}).$mount("#app");
