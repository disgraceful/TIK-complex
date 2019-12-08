<template>
  <v-card>
    <v-list>
      <v-list-group no-action sub-group v-for="code in codes" :key="code.name">
        <template v-slot:activator>
          <v-list-item-title class="title">
            <v-container>
              <v-row>
                <v-flex grow>{{ code.name }}</v-flex>
                <v-progress-circular
                  :value="code.progress"
                  color="green"
                  rotate="90"
                ></v-progress-circular>
              </v-row>
            </v-container>
          </v-list-item-title>
        </template>

        <v-list-item v-for="subcode in code.subcodes" :key="subcode.name" link>
          <v-list-item-content>
            <router-link
              :to="{
                name: 'code',
                params: {
                  name: subcode.codecCode
                }
              }"
              tag="div"
            >
              <v-list-item-title>
                {{ subcode.name }}
              </v-list-item-title>
            </router-link>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon
              :color="subcode.complete ? 'green' : 'red'"
              v-text="
                subcode.complete
                  ? 'mdi-checkbox-marked-circle-outline'
                  : 'mdi-close-circle-outline'
              "
            ></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  methods: {
    routeParam(subcode) {
      return subcode.name.replace(/\s+/g, "");
    }
  },
  computed: {
    codes() {
      return this.$store.getters.allCodes;
    }
  }
};
</script>

<style scoped></style>
