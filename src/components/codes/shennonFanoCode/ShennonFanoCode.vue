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
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="n in slider.value" :key="n">
                <td>P{{n-1}}</td>
                <td>
                  <v-text-field readonly v-model="randoms[n-1]"></v-text-field>
                </td>
                <td>
                  <v-text-field v-model="answers[`${n}`]"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col>
        <v-btn @click="generate()">Generate</v-btn>
        <v-btn @click="sequence()">Code</v-btn>
      </v-col>
      <v-dialog v-model="dialog" max-width="330px" hide-overlay>
        <code-dialog
          :correct="correct"
          @endDialog="resetForm($event)"
          @completed="resetForm('completed')"
        ></code-dialog>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
import CodeDialog from "../../shared/CodeCompleteDialog";
import { shennonFano } from "../../../codelogic/othercodes/shennonfano";
export default {
  data() {
    return {
      dialog: false,
      completed: 0,
      slider: {
        min: 6,
        max: 9,
        value: 6
      },
      correct: false,
      answers: {},
      randoms: []
    };
  },
  mixins: [shennonFano],
  components: {
    "code-dialog": CodeDialog
  },
  methods: {
    resetForm(resume) {
      if (resume === "completed") {
        this.completed = false;
      }
      if (resume) {
      }
    },
    test() {
      this.generate();
    },
    check() {},
    sequence() {
      let answer = this.code(this.randoms);
    },
    generate() {
      this.randoms = [];
      let total = 100;
      let remainder = this.slider.value - 6;
      remainder = remainder > 0 ? 5 - remainder : 5;
      let max = remainder * this.slider.value;
      let min = max - remainder;
      for (let i = 0; i < this.slider.value; i++) {
        let minus = this.random(min, max);
        this.randoms.push(minus);
        console.log(`${i}: ${minus}`);
        total -= minus;
        max -= remainder;
        min = max - remainder + 1;
      }
      console.log(total);
      while (total != 0) {
        for (let i = 0; i < this.randoms.length; i++) {
          if (total > 0 && total !== 0) {
            this.randoms[i]++;
            total--;
          } else if (total < 0 && this.randoms[i] > 1 && total !== 0) {
            this.randoms[i]--;
            total++;
          }
        }
      }
      this.randoms = this.randoms.map(e => e / 100);
      console.log(`${total}`, this.randoms);
    },
    random(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  },
  created(){
    this.generate();
  }
};
</script>