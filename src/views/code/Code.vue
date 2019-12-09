<template>
  <v-card>
    <v-card-title>{{ getCode.name }}</v-card-title>
    <component :is="loaderComponent">
      <v-divider></v-divider>
      <v-container>
        <v-row justify="center">
          <v-btn large text @click="setComponent('theory')">
            Теорія <v-icon right>mdi-file-document</v-icon></v-btn
          >
          <v-btn large text @click="setComponent('practice')">
            Практика <v-icon right>mdi-pencil-plus</v-icon></v-btn
          >
          <v-btn large text @click="setComponent('test')">
            Тестування <v-icon right>mdi-timer-sand</v-icon></v-btn
          >
        </v-row>
      </v-container>
    </component>
  </v-card>
</template>

<script>
import eventBus from "../../main";
export default {
  props: ["name"],
  computed: {
    getCode() {
      return this.$store.getters.getCodeById(this.name);
    },
    loaderComponent() {
      return () => import(`../../components/codes/${this.name}`);
    }
  },
  methods: {
    setComponent(component) {
      console.log("was enit", component);
      eventBus.$emit("componentChanged", component);
    }
  }
};
</script>
