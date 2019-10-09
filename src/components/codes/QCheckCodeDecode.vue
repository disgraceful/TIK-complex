<template>
  <v-card>
    <v-card-title>Decode Code</v-card-title>
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
      name: "QCheckDecode",
      model: "229657180",
      q:"10"
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
        this.decode(this.model,this.q);
      }
    }
  }
};
</script>