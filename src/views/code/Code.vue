<template>
  <v-card>
    <v-card-title>{{ getCode.name }}</v-card-title>
    <!-- <v-container>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-btn large text :to="{ name: 'codeTheory' }">Теорія</v-btn>
        <v-btn large text :to="{ name: 'code' }">Практика</v-btn>
        <v-btn large text :to="{ name: 'code' }">Тестування</v-btn>
      </v-row>
    </v-container> -->
    <component :is="loaderComponent">
      <v-container>
        <v-divider></v-divider>
        <v-row justify="center">
          <v-btn large text @click="setComponent('theory')">Теорія</v-btn>
          <v-btn large text @click="setComponent('practice')">Практика</v-btn>
          <v-btn large text @click="setComponent('test')">Тестування</v-btn>
        </v-row>
      </v-container>
    </component>
  </v-card>
</template>

<script>
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
  methods: {}
};
</script>
