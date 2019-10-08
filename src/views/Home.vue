<template>
  <v-card>
    <v-expansion-panels :accordion="true">
      <v-expansion-panel v-for="code in codes" :key="code.name">
        <v-expansion-panel-header>{{code.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="subcode in code.subcodes" :key="subcode.name">
              <v-list-item-content>
                <router-link
                  v-if="subcode!==undefined || subcode!== null"
                  :to="`/code/${routeParam(subcode.name)}`"
                  tag="v-list-item-title"
                >
                  <v-list-item-title v-text="subcode.name"></v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container fluid>
      <router-link to="/info" tag="v-btn">
        <v-btn>Done</v-btn>
      </router-link>
      <v-btn>Info</v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  methods: {
    routeParam(name) {
      return name.replace(/\s+/g, "");
    }
  },
  data: () => ({
    codes: [
      { name: "Systematic codes", subcodes: [] },
      { name: "Cycle codes", subcodes: [] },
      {
        name: "Nonbinary codes",
        subcodes: [
          {
            name: "Primal NonBinary Code",
            to: name.replace(/\s+/g, "")
          },
          { name: "Q Check Code", to: name.replace(/\s+/g, "") },
          { name: "Simple Repeat Code", to: name.replace(/\s+/g, "") },
          { name: "Iterate Code", to: name.replace(/\s+/g, "") }
        ]
      },
      {
        name: "Other codes",
        subcodes: [
          { name: "Grey Code", to: name.replace(/\s+/g, "") },
          { name: "Berger Code", to: name.replace(/\s+/g, "") },
          { name: "Binary Decimal Code", to: name.replace(/\s+/g, "") }
        ]
      }
    ]
  })
};
</script>

<style scoped>
</style>
