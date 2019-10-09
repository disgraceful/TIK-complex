<template>
  <v-card>
    <v-card-title>Code Decoding</v-card-title>
    <v-card-text>Decode the message {{msg}}</v-card-text>
    <v-card-actions>
      <v-col>
        <v-text-field filled height="15px" dense v-model.trim="model"></v-text-field>
        <v-btn :disabled="btnValid" @click="check()">Submit</v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
//import { greyCodeLogic } from "../../codelogic/othercodes/grey";
export default {
  data() {
    return {
      name: "GreyCodeDecode",
      msg: 111001101,
      model: ""
    };
  },
  computed: {
    btnValid() {
      return this.model === undefined || this.model === "";
    }
  },
  //mixins: [greyCodeLogic],
  methods: {
    check() {
      if (!this.btnValid) {
        this.decode(this.model);
      }
    }
  },
  mounted() {}
};
</script>