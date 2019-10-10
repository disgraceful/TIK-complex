<template>
  <v-card flat>
    <v-card-actions>
      <v-col>
        <v-row v-for="i in matrix+1" :key="i">
          <v-col v-for="j in matrix+1" :key="j">
            <v-text-field style="width: 50px" v-model="values[`${i}${j}`]"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-row>
        <v-col>
          <v-btn @click="test()">Code</v-btn>
          <v-text-field label="Q" style="width: 50px" v-model="q"></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { iterateCode } from "../../../codelogic/nonbinary/iteratecode";
export default {
  data() {
    return {
      matrix: 2,
      q: 3,
      values: {}
    };
  },
  mixins: [iterateCode],
  methods: {
    test() {
      console.log(this.values);
      this.code(this.values, this.matrix, this.q);
    }
  }
};
</script>