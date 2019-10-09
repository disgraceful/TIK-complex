<template>
  <v-card>
    <v-card-title class="headline">{{dialogText}}</v-card-title>
    <div v-if="!correct">
      <v-card-text class="subtitle-1">Try again?</v-card-text>
      <v-card-actions>
        <v-btn color="green darken-1" text @click="endDialog(true)">Yes</v-btn>
        <v-btn color="green darken-1" text @click="endDialog(false)">No</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      yes: "Correct! Nice job, friend!",
      no: "Answer is not correct!"
    };
  },
  props: ["correct"],
  computed: {
    dialogText() {
      return this.correct ? this.yes : this.no;
    }
  },
  methods: {
    endDialog(resume) {
      this.$emit("endDialog", resume);
    }
  }
};
</script>

