<template>
  <v-container>
    <slot></slot>
    <keep-alive>
      <component :is="activeComponent" :name="name"></component>
    </keep-alive>
  </v-container>
</template>

<script>
import eventBus from "../../main";

export default {
  data() {
    return {
      name: "Код Грея",
      activeComponent: () => import("./greyCode/GreyCodeTest"),
      theory: () => import("./greyCode/GreyCodeTheory"),
      test: () => import("./greyCode/GreyCodeTest"),
      practice: () => import("./greyCode/GreyPractice")
    };
  },
  created() {
    eventBus.$on("componentChanged", component => {
      this.activeComponent = this[component];
    });
  }
};
</script>
