<template>
  <v-card flat>
    <v-card-title class="title">{{ props.welcomeMsg }}</v-card-title>
    <v-container>
      <v-layout justify-space-between>
        <v-flex xs5 shrink>
          <v-text-field
            v-model.trim="model"
            :label="props.codeMsg"
            :rules="[rules.required, rules.binary]"
            filled
            height="15px"
            dense
          ></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-layout justify-center>
            <v-btn class="mb-3" @click="generateBinary"
              >Згенерувати довжиною</v-btn
            >
          </v-layout>
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
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-flex xs5>
        <v-text-field
          v-model.trim="answer"
          label="Введіть відповідь"
          :rules="[rules.binary]"
          filled
          height="15px"
          dense
        ></v-text-field>
      </v-flex>
    </v-container>
    <v-container pt-0>
      <v-btn class="ma-3" @click="fullReset">Очистити</v-btn>
      <v-btn class="ma-3" :disabled="valid" color="primary" @click="submit"
        >Підтвердити</v-btn
      >
    </v-container>
    <v-dialog v-model="dialog" max-width="330px" hide-overlay>
      <my-code-dialog
        :correct="correct === answer"
        @endDialog="resetForm($event)"
        @completed="resetForm('completed')"
      ></my-code-dialog>
    </v-dialog>
  </v-card>
</template>

<script>
import CodeDialog from "../../shared/CodeCompleteDialog";
export default {
  props: {
    props: {
      type: Object
    }
  },
  data() {
    return {
      model: "",
      answer: "",
      correct: "",
      dialog: false,
      slider: {
        min: 3,
        max: 15,
        value: 8,
        default: 8
      },
      rules: {
        required: value =>
          !!value || "Згенеруйте повідомлення, або введіть власноруч!",
        binary: value => /^[01]+$/.test(value) || "Тільки '0' або '1' дозволені"
      }
    };
  },
  computed: {
    valid() {
      return (
        this.model === undefined ||
        this.model === "" ||
        this.answer == undefined ||
        this.answer === ""
      );
    }
  },
  components: {
    "my-code-dialog": CodeDialog
  },
  methods: {
    generateBinary() {
      //to MIXINS
      let resultBinary = "";
      for (let i = 0; i < this.slider.value; i++) {
        resultBinary = resultBinary.concat(Math.random() < 0.5 ? "0" : "1");
      }
      this.model = resultBinary;
    },
    submit() {
      this.correct = this.code(this.model);
      this.dialog = true;
    },
    resetForm(resume) {
      //   this.dialog = false;
      //   this.answer = "";
      //   if (resume === "completed") {
      //     this.completed++;
      //     this.fullReset();
      //     return;
      //   }
      //   if (!resume) {
      //     this.fullReset();
      //   }
    },
    fullReset() {
      this.answer = "";
      this.model = "";
      this.slider.value = this.slider.default;
    }
  },
  beforeMount() {
    this.generateBinary();
  }
};
</script>
