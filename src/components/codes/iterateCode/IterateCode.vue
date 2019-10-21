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
    <v-row>
      <v-col>
        <v-btn @click="generate()">Generate</v-btn>
        <v-btn @click="test()">Code</v-btn>
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
import CodeDialog from "../../shared/CodeCompleteDialog"
export default {
  data() {
    return {
      q: 3,
      values: {},
      slider: {
        min: 2,
        max: 6,
        value: 2
      },
      dialog: false,
      completed: 0,
      correct: false
    };
  },
  mixins: [iterateCode],
  components: { "code-dialog": CodeDialog },
  methods: {
    test() {
      this.code(this.values, this.slider.value, this.q);
    },
    check() {
      let keys = Object.keys(this.values);

      let res = keys.filter(x => x.includes(this.slider.value + 1));
      if (res.length !== this.slider.value * 2 + 1) return false;

      let result = res.every(
        x => this.values[x] !== "" && this.values[x] !== undefined
      );

      console.log(result);
      return result;
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
      this.q = Math.round(Math.random() * 9);
    },
    submit() {
      let answer = this.code(this.values, this.slider.value, this.q);
      console.log(answer);
      this.correct = this.decode(this.values, this.slider.value, this.q);
      this.dialog = true;
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
  },

  created() {
    this.generate();
  }
};
</script>