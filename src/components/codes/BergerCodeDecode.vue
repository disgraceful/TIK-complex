<template>
  <v-card>
    <v-card-title>Code Decode</v-card-title>
    <v-card-text>Code the message</v-card-text>
    <v-card-actions>
      <v-row>
        <v-container fluid>
          <v-text-field filled height="15px" dense v-model.trim="model"></v-text-field>
        </v-container>

      </v-row>
      <v-container fluid>
        <v-btn :disabled="btnValid" @click="check()">Submit</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bergerCodeLogic } from "../../codelogic/othercodes/berger";
export default {
  data() {
    return {
      name: "BergerCodeDecode",
      model: "",
      decimalcode: ""
    };
  },
  computed: {
    btnValid() {
      return this.model === undefined || this.model === "";
    }
  },
  mixins: [bergerCodeLogic],
  methods: {
    check() {
      if (!this.btnValid) {
        this.decode(this.model.trim());
      }
    }
  }
};
</script>