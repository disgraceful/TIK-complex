<template>
  <v-card>
    <v-card-title>{{ code.name }}</v-card-title>

    <v-container>
      <v-divider></v-divider>
      <v-row justify="center">
        <v-btn large text @click="setActiveComponent('Theory')">Теорія</v-btn>
        <v-btn large text @click="setActiveComponent('Test')">Кодування</v-btn>
        <v-btn large text @click="setActiveComponent('Practice')"
          >Декодування</v-btn
        >
        <v-btn large text @click="setActiveComponent('Practice')"
          >Тестування</v-btn
        >
      </v-row>
    </v-container>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      componentName: null,
      activeComponent: () => import(`../components/codes/${this.componentName}`)
    };
  },
  props: ["name"],
  computed: {
    loader() {
      return () => import(`../components/codes/${this.componentName}`);
    },
    code() {
      return this.$store.getters.getCodeById(this.name);
    }
  },
  methods: {
    setActiveComponent(btnName) {
      this.componentName = `${this.codeName}${btnName}`;
      this.activeComponent = () => this.loader();
    }
  },
  beforeMount() {
    this.componentName = `${this.name}Practice`;
  },
  mounted() {
    this.loader()
      .then(() => {
        this.activeComponent = () => this.loader();
      })
      .catch(() => {
        console.error(
          "error while mounting required component",
          this.activeComponent
        );
      });
  }
};
</script>
