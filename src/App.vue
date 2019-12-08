<template>
  <v-app>
    <my-app-header></my-app-header>
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "./components/shared/AppHeader";
export default {
  data: () => ({
    //
  }),
  components: {
    "my-app-header": AppHeader
  }
};
</script>
