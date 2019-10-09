<template>
  <v-card flat>
    <v-card-title></v-card-title>
    <v-card-text class="title">Decode the message (insert or generate):</v-card-text>
    <v-card-actions>
      <v-col>
        <v-text-field
          v-model.trim="model"
          :rules="[rules.required,rules.binary]"
          filled
          height="15px"
          dense
        ></v-text-field>
        <v-col>
          <p>Generate random:</p>
          <v-slider v-model="slider.value" :max="slider.max" :min="slider.min">
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
              ></v-text-field>
            </template>
          </v-slider>
          <v-btn @click="generateBinary">Generate</v-btn>
        </v-col>
        <v-col>
          <p>Enter coded message:</p>
          <v-text-field
            v-model.trim="answer"
            :rules="[rules.required,rules.binary]"
            filled
            height="15px"
            dense
          ></v-text-field>
        </v-col>
        <v-btn @click="fullReset()">Reset</v-btn>
        <v-btn :disabled="btnValid" @click="submit()">Submit</v-btn>
        <v-dialog v-model="dialog" max-width="330px" hide-overlay>
          <code-dialog
            :correct="correct===answer"
            @endDialog="resetForm($event)"
            @completed="resetForm('completed')"
          ></code-dialog>
        </v-dialog>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
import CodeDialog from "../../shared/CodeCompleteDialog";
import { greyCodeLogic } from "../../../codelogic/othercodes/grey";
export default {
  data() {
    return {
      model: "",
      answer: "",
      correct: "",
      completed: 0,
      dialog: false,
      slider: {
        min: 3,
        max: 15,
        value: 8
      },
      rules: {
        required: value => !!value || "Generate or insert your own!",
        binary: value => /^[01]+$/.test(value) || "Only '0' or '1' are allowed"
      }
    };
  },
  computed: {
    btnValid() {
      return (
        this.model === undefined ||
        this.model === "" ||
        this.answer == undefined ||
        this.answer === ""
      );
    }
  },
  mixins: [greyCodeLogic],
  components: { "code-dialog": CodeDialog },
  methods: {
    submit() {
      if (!this.btnValid) {
        this.correct = this.decode(this.model);
        this.dialog = true;
      }
    },
    generateBinary() {
      let resultBinary = "";
      for (let i = 0; i < this.slider.value; i++) {
        resultBinary = resultBinary.concat(Math.random() < 0.5 ? "0" : "1");
      }
      this.model = resultBinary;
      console.log(this.decode(this.model));
    },
    resetForm(resume) {
      this.dialog = false;
      this.answer = "";
      if (resume === "completed") {
        this.completed++;
        this.fullReset();
        return;
      }

      if (!resume) {
        this.fullReset();
      }
    },
    fullReset() {
      this.answer = "";
      this.model = "";
      this.slider.value = this.slider.default;
    }
  }
};
</script>