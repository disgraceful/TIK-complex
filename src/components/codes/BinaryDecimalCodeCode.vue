<template>
  <v-card>
    <v-card-title>Code Code</v-card-title>
    <v-card-text>Code the message </v-card-text>
    <v-card-actions>
      <v-row>
        <v-container fluid>
          <v-text-field filled height="15px" dense v-model.trim="model"></v-text-field>
        </v-container>

        <v-container fluid>
          <v-text-field filled height="15px" dense v-model.trim="decimalcode"></v-text-field>
        </v-container>
      </v-row>
      <v-container fluid>
        <v-btn :disabled="btnValid" @click="check()">Submit</v-btn>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { bdCodeLogic } from "../../codelogic/othercodes/bdcode";
export default {
  data() {
    return {
      name: "BinaryDecimalCodeCode",
      model: "",
      decimalcode: ""
    };
  },
  computed: {
    btnValid() {
      return this.model === undefined || this.model === "" || this.decimalcode === undefined || this.decimalcode==="";
    }
  },
  mixins: [bdCodeLogic],
  methods: {
    check() {
      if (!this.btnValid) {
        this.code(this.model, this.decimalcode);
      }
    }
  }
};
</script>