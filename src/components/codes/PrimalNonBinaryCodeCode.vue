<template>
  <v-card>
    <v-card-title>Code Code</v-card-title>
    <v-card-text>Code the message</v-card-text>
    <v-card-actions>
      <v-col>
        <v-row>
          <v-container fluid>
            <v-text-field label="q" filled height="15px" dense v-model.trim="q"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-text-field label="n" filled height="15px" dense v-model.trim="n"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-text-field label="alphabet" filled height="15px" dense v-model.trim="alphabet"></v-text-field>
          </v-container>
        </v-row>
        <v-row>
          <v-container fluid>
            <v-select v-model="type" :items="types" label="Type" hide-details single-line></v-select>
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
import { primalNonBinary } from "../../codelogic/othercodes/primalnonbinary";
export default {
  data() {
    return {
      name: "PrimalNonBinaryCodeCode",
      q: "3",
      n: "3",
      alphabet: "abc",
      type: "transposition",
      types: [
        "limitedCombination",
        "transposition",
        "accomodation",
        "allCombination",
        "quality"
      ]
    };
  },
  computed: {
    btnValid() {
      return this.type === undefined;
    }
  },
  mixins: [primalNonBinary],
  methods: {
    check() {
      if (!this.btnValid) {
        this.code(this.alphabet, this.n, this.type);
      }
    }
  }
};
</script>