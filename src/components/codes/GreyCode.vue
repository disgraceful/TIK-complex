<template>
  <v-container>
    <slot></slot>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </v-container>
</template>

<script>
import eventBus from "../../main";
export default {
  data() {
    return {
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
