<template>
  <v-card flat>
    <v-card-title>{{welcome}}</v-card-title>
    <v-card-actions>
      <v-col>
        <v-tabs v-model="active">
          <v-tab v-for="item in items" :key="item">{{item}}</v-tab>
        </v-tabs>
        <v-tabs-items v-model="active">
          <v-tab-item v-for="item in items" :key="item">
            <keep-alive>
              <component :is="component(item)"></component>
            </keep-alive>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return { active: null, items: ["code", "decode"] };
  },
  props: {
    welcome: {
      type: String,
      required: true
    },
    components: {
      type: Array,
      required: true
    }
  },
  methods: {
    component(name) {
      return name === "code" ? this.components[0] : this.components[1];
    }
  }
};
</script>