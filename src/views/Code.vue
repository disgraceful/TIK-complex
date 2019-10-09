<template>
  <v-card>
    <v-card-title>{{$route.params.name}}</v-card-title>

    <v-container>
      <v-row>
        <v-btn text @click="$router.push({path:'/'})">Back To Codes</v-btn>
        <v-btn text @click="setActiveComponent('Theory')">Theory</v-btn>
        <v-btn text @click="setActiveComponent('Test')">Test</v-btn>
        <v-btn text @click="setActiveComponent('Practice')">Practice</v-btn>
      </v-row>
    </v-container>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
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
    this.componentName = `${this.codeName}Practice`;
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