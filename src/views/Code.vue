<template>
  <v-card>
    <v-card-title>{{$route.params.name}}</v-card-title>

    <v-container>
      <v-row>
        <router-link to="/" tag="v-btn">
          <v-btn>Go Back To Codes</v-btn>
        </router-link>
        <v-btn @click="setActiveComponent('Theory')">Theory</v-btn>
        <v-btn @click="setActiveComponent('Test')">Test</v-btn>
        <v-btn @click="setActiveComponent('Code')">Practice Code</v-btn>
        <v-btn @click="setActiveComponent('Decode')">Practice Decode</v-btn>
      </v-row>
    </v-container>
    <component :is="activeComponent"></component>
  </v-card>
</template>

<script>
export default {
  data: function() {
    return {
      codeName: this.$route.params.name,
      componentName: null,
      activeComponent: () => import(`../components/codes/${this.componentName}`)
    };
  },
  computed: {
    loader() {
      return () => import(`../components/codes/${this.componentName}`);
    }
  },
  methods: {
    setActiveComponent(btnName) {
      this.componentName = `${this.codeName}${btnName}`;
      this.activeComponent = () => this.loader();
    }
  },
  beforeMount() {
    this.componentName = `${this.codeName}Test`;
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