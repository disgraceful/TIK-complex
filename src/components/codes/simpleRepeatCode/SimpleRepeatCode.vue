<template>
  <v-card flat>
    <v-card-title></v-card-title>
    <v-card-text class="title">Code the message (insert or generate):</v-card-text>
    <v-card-actions>
        <v-col>
      <v-text-field v-model="model"></v-text-field>
      <v-btn @click="codeMsg()">Submit</v-btn>
      <v-btn @click="decodeMsg()">TestDecode</v-btn>
      {{answer}}
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import CodeDialog from "../../shared/CodeCompleteDialog";
import { simpleRepeat } from "../../../codelogic/nonbinary/simplerepeat";
export default {
  data() {
    return {
      model: "",
      answer: ""
    };
  },
  computed: {},
  mixins: [simpleRepeat],
  components: { "code-dialog": CodeDialog },
  methods: {
    codeMsg() {
        this.answer = this.code(this.model);
    },
    decodeMsg(){
        this.answer = this.decode(this.model);
    },
    submit() {},
    generateBinary() {},
    fullReset() {}
  }
};
</script>
