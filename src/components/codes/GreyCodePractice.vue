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
              <component :is="item"></component>
            </keep-alive>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import Code from "./greyCode/GreyCode";
import Decode from "./greyCode/GreyDecode";
export default {
  data() {
    return {
      name: "GreyCodePractice",
      welcome: "Practice Grey Code before taking the test!",
      active: null,
      items: ["Code", "Decode"]
    };
  },
  computed: {},
  components: { Code, Decode},
  methods: {}
};
</script>