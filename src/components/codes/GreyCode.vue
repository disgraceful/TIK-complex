<template>
  <v-container>
    <!--  <v-row justify="center">
      <v-btn large text @click="setComponent('theory')">Теорія</v-btn>
      <v-btn large text @click="setComponent('practice')">Практика</v-btn>
      <v-btn large text @click="setComponent('test')">Тестування</v-btn>
    </v-row> -->
    <slot></slot>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeComponent: () => import("./greyCode/GreyCodeTheory"),
      theory: () => import("./greyCode/GreyCodeTheory"),
      code: () => import("./greyCode/GreyCodePractice"),
      decode: () => import("./greyCode/GreyDecodePractice"),
      test: () => import("./greyCode/GreyCodeTest"),
      practice: () => import("./greyCode/GreyPractice")
    };
  },
  methods: {
    setComponent(component) {
      this.activeComponent = this[component];
    }
  }
};
</script>
