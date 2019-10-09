<template>
  <v-card>
    <v-card-title>Code Code</v-card-title>
    <v-card-text>Code the message</v-card-text>
    <v-card-actions>
      <v-col>
        <v-row>
          <v-container fluid>
            <v-text-field label="code" filled height="15px" dense v-model.trim="model"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-text-field label="q" filled height="15px" dense v-model.trim="q"></v-text-field>
          </v-container>
        </v-row>
        <v-container fluid>
          <v-btn :disabled="btnValid" @click="check()">Submit</v-btn>
        </v-container>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import { qCheckLogic } from "../../codelogic/nonbinary/qcheckcode";
export default {
  data() {
    return {
      name: "QCheckCode",
      model: "74117470311505",
      q:"8"
    };
  },
  computed: {
    btnValid() {
      return this.model === undefined || this.model === "";
    }
  },
  mixins: [qCheckLogic],
  methods: {
    check() {
      if (!this.btnValid) {
        this.code(this.model,this.q);
      }
    }
  }
};
</script>