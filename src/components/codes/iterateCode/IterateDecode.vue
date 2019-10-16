<template>
  <v-card flat>
    <v-container>
      <v-slider
        v-model="slider.value"
        :max="slider.max"
        :min="slider.min"
        label="Matrix"
        @change="generate()"
      >
        <template v-slot:append>
          <v-text-field
            v-model="slider.value"
            :min="slider.min"
            :max="slider.max"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 50px"
            @input="generate()"
          ></v-text-field>
        </template>
      </v-slider>
    </v-container>
    <v-card-actions>
      <v-col>
        <v-row v-for="i in slider.value+1" :key="i">
          <v-col style="max-width: 70px" v-for="j in slider.value+1" :key="j">
            <v-text-field style="width: 50px" v-model.number="values[`${i}${j}`]"></v-text-field>
          </v-col>
        </v-row>
      </v-col>
    </v-card-actions>
    <v-text-field label="Q" style="width: 50px" v-model="q"></v-text-field>
    <v-text-field
      label="Mistakes"
      style="width: 50px"
      v-model="mistakes"
      type="number"
      min="1"
      max="4"
    ></v-text-field>
    <v-row>
      <v-col>
        <v-btn @click="generateWithMistake()">Generate</v-btn>
        <v-btn @click="test()">TestDecode</v-btn>
        <v-btn :disabled="!check()" @click="submit()">Sumbit</v-btn>
      </v-col>
      <v-dialog v-model="dialog" max-width="330px" hide-overlay>
        <code-dialog
          :correct="correct"
          @endDialog="resetForm($event)"
          @completed="resetForm('completed')"
        ></code-dialog>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script>
import { iterateCode } from "../../../codelogic/nonbinary/iteratecode";
import CodeDialog from "../../shared/CodeCompleteDialog";
export default {
  data() {
    return {
      q: 3,
      mistakes: 1,
      values: {},
      slider: {
        min: 2,
        max: 6,
        value: 2
      },
      dialog: false,
      correct: false,
      completed: 0
    };
  },
  mixins: [iterateCode],
  components: { "code-dialog": CodeDialog },
  methods: {
    test() {
      console.log(this.decode(this.values, this.slider.value, this.q));
    },
    check() {
      let keys = Object.keys(this.values);
      let result = keys.every(
        x => this.values[x] !== "" && this.values[x] !== undefined
      );
      return result;
    },
    generateWithMistake() {
      this.generate();
      let coded = this.code(this.values, this.slider.value, this.q);
      for (let i = 1; i <= coded.length; i++) {
        for (let j = 1; j <= coded.length; j++) {
          this.values[`${i}${j}`] = coded[i - 1][j - 1];
        }
      }
      let counter = this.mistakes;
      while (counter > 0) {
        this.createMistake();
        counter--;
      }
      this.q += 1;
      this.q -= 1;
    },
    generate() {
      for (const key in this.values) {
        this.values[key] = "";
      }
      for (let i = 1; i <= this.slider.value; i++) {
        for (let j = 1; j <= this.slider.value; j++) {
          this.values[`${i}${j}`] = Math.round(Math.random() * 9);
        }
      }
      this.q = Math.round(Math.random() * 7 + 2);
    },
    submit() {
      this.correct = this.decode(this.values, this.slider.value, this.q);
      this.dialog = true;
    },
    createMistake() {
      let randRow = Math.round(Math.random() * (this.slider.value - 1) + 1);
      let randCol = Math.round(Math.random() * (this.slider.value - 1) + 1);
      let oldValue = this.values[`${randRow}${randCol}`];
      let newValue = this.generateRandomValue(oldValue);
      while (newValue === oldValue || (newValue - oldValue) % this.q === 0) {
        newValue = this.generateRandomValue(oldValue);
      }
      this.values[`${randRow}${randCol}`] = newValue;
    },
    generateRandomValue(old) {
      let newV = Math.round(Math.random() * 9);
      return newV;
    },
    resetForm(resume) {
      if (resume === "completed") {
        this.completed++;
      }
      if (!resume) {
        Object.keys(this.values).forEach(key => (this.values[key] = ""));
      }
      this.dialog = false;
    }
  }
};
</script>