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
                <td>Random Value</td>
                <td>
                  <v-text-field v-model="values[`${n}`]"></v-text-field>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col>
        <v-btn @click="test()">Test</v-btn>
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
      values: {},
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
      console.log(this.values);
    },
    generate() {},
    random(min, max) {
      return Math.round(Math.rand() * (max - min) + min);
    }
  },
  created() {
    this.randoms = [];
    let total = 100;
    let min = 1;
    let max = 5;
    let sum = 0;
    for (let i = 0; i < this.slider.value; i++) {
      let minus = this.random(min, max);
      this.randoms.push(minus);
      sum+=minus;
    }
  }
};
</script>