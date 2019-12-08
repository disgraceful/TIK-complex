<template>
  <div>
    <my-app-header></my-app-header>
    <v-container>
      <v-card>
        <v-list>
          <v-list-group
            no-action
            sub-group
            v-for="code in codes"
            :key="code.name"
          >
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

            <v-list-item
              v-for="subcode in code.subcodes"
              :key="subcode.name"
              link
            >
              <v-list-item-content
                ><v-list-item-title>{{
                  subcode.name
                }}</v-list-item-title></v-list-item-content
              >
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

        <!-- <v-expansion-panels :accordion="true">
        <v-expansion-panel v-for="code in codes" :key="code.name">
          <v-expansion-panel-header>{{ code.name }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item v-for="subcode in code.subcodes" :key="subcode.name">
                <v-list-item-content>
                  <router-link
                    v-if="subcode !== undefined || subcode !== null"
                    :to="`/code/${routeParam(subcode.name)}`"
                    tag="li"
                  >
                    <v-list-item-title
                      v-text="subcode.name"
                    ></v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppHeader from "../components/shared/AppHeader";
export default {
  methods: {
    routeParam(name) {
      return name.replace(/\s+/g, "");
    }
  },
  data: () => ({
    codes: [
      { name: "Систематичні коди", subcodes: [], progress: 0 },
      { name: "Циклічні коди", subcodes: [], progress: 0 },
      {
        name: "Недвійкові коди",
        subcodes: [
          {
            name: "Первинні недвійкові коди",
            codeсCode: "NBC1PNBC",
            complete: false
          },
          {
            name: "Код з перевіркою по модулю",
            codeсCode: "NBC2QCC",
            complete: true
          },
          {
            name: "Код з простим повторенням",
            codeсCode: "NBC3SRC",
            complete: true
          },
          { name: "Ітеративний код", codeсCode: "NBC4IC", complete: false }
        ],
        progress: 50
      },
      {
        name: "Інші коди",
        subcodes: [
          { name: "Код Грея", codeсCode: "OC1GC", complete: false },
          { name: "Код Бергера", codeсCode: "OC2BC", complete: false },
          {
            name: "Двійково-десятковий код",
            codeсCode: "OC3BDC",
            complete: true
          },
          { name: "Код Шеннона-Фано", codeсCode: "OC4SFC", complete: false }
        ],
        progress: 25
      }
    ]
  }),
  components: {
    "my-app-header": AppHeader
  }
};
</script>

<style scoped></style>
