<template>
  <v-card flat>
    <v-container>
      <v-card-title class="justify-center">Код Грея. Тестування</v-card-title>
      <v-card-text v-if="wasTestCompleted" class="subtitle-1 text-center pa-0">
        Тест було пройдено. Найвища оцінка: {{ getBestTest }}
      </v-card-text>
      <v-card-text class="subtitle-1 text-center">
        Перед проходженням тестування рекомендується переглянути теорію і
        виконати тренувальні вправи!
        <br />
        Після початку тестування у Вас буде {{ minutesTotal }} хвилин на
        виконання.</v-card-text
      >
      <v-container>
        <v-layout justify-center>
          <v-btn v-if="!testStarted" color="primary" @click="startTest"
            >Старт</v-btn
          >

          <v-flex v-else class="text-center" style="height:36px"
            >Час до кінця: {{ date }}
          </v-flex>
        </v-layout>
      </v-container>
      <v-container v-if="testStarted">
        <v-layout row justify-space-around>
          <v-flex xs6>
            <v-col>
              <v-text-field
                v-model.trim="model"
                label="Закодуйте повідомлення"
                filled
                height="15px"
                dense
                :readonly="true"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model.trim="answer"
                label="Введіть відповідь"
                :rules="[rules.binary]"
                filled
                height="15px"
                dense
              >
              </v-text-field>
            </v-col>
          </v-flex>
          <v-flex xs4>
            <v-col class="text-center pa-0">
              <v-col>Виконано завдань:</v-col>
              <v-progress-circular
                class="ml-4"
                :value="(currentTask * 100) / taskAmount"
                color="green"
                rotate="90"
                size="48"
                >{{ currentTask }}/{{ taskAmount }}</v-progress-circular
              >
            </v-col>
          </v-flex>
        </v-layout>
        <v-layout offset-sm-1>
          <v-btn
            class="ma-2"
            color="primary"
            :disabled="valid"
            @click="submitAnswer"
            >Підтвердити</v-btn
          >
          <v-btn class="ma-2" :disabled="!testStarted" @click="cancel">
            Відмінити Тест
          </v-btn>
        </v-layout>
      </v-container>

      <!-- to separate component -->
      <v-dialog v-model="dialog" max-width="340px" hide-overlay persistent>
        <v-card>
          <v-card-title
            class="headline"
            v-text="
              isTestPassed ? 'Тестування пройдено!' : 'Тестування не пройдено!'
            "
          ></v-card-title>
          <v-card-text class="subtitle-1 black--text">
            Правильних відповідей: {{ correctTasks }}/{{ taskAmount }}
          </v-card-text>
          <v-list-group
            no-action
            sub-group
            v-for="(task, i) in allTasks"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-title class="subtitle-1">
                <v-flex grow> Завдання {{ i + 1 }}</v-flex>
              </v-list-item-title>
              <v-list-item-icon>
                <v-icon
                  :color="corrects[i] ? 'green' : 'red'"
                  v-text="corrects[i] ? 'mdi-check' : 'mdi-alert-circle'"
                ></v-icon>
              </v-list-item-icon>
            </template>

            <v-list-item>
              <v-list-item-content>
                <v-col>Умова: {{ task }}</v-col>
                <v-col>Відповідь: {{ allAnswers[i] }}</v-col>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-card-actions class="pa-2">
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text large @click="cancel">
              Спробувати знову
            </v-btn>
            <v-btn color="green darken-1" text large to="/">
              Вихід
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="timesUpDialog" max-width="340px" hide-overlay>
        <v-card>
          <v-card-title class="headline">Час вийшов!</v-card-title>
          <v-card-text class="subtitle-1 black--text">
            Оцінити виконані завдання?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="timesUpDialog = false">
              Оцінити
            </v-btn>

            <v-btn color="green darken-1" text @click="timesUpDialog = false">
              Відміна
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
import { greyCodeLogic } from "../../../codelogic/othercodes/grey";
export default {
  data() {
    return {
      model: "",
      answer: "",
      dialog: false,
      timesUpDialog: false,
      rules: {
        required: value => !!value || "Введіть відповідь",
        binary: value =>
          value == " " ||
          /^[01]+$/.test(value) ||
          "Тільки '0' або '1' дозволені"
      },
      allTasks: [],
      allAnswers: [],
      corrects: [],
      currentTask: 0,
      taskAmount: 5,
      complexity: 4,
      minutesTotal: 5,
      timeLeft: 5 * 60,
      testStarted: false,
      timer: null
    };
  },
  mixins: [greyCodeLogic],
  props: ["name"],
  computed: {
    valid() {
      return this.answer === "" || this.answer === undefined;
    },
    date() {
      return this.dateFormat(this.timeLeft);
    },
    correctTasks() {
      return this.corrects.filter(e => e).length;
    },
    isTestPassed() {
      return this.correctTasks >= Math.round(this.taskAmount * 0.6);
    },
    wasTestCompleted() {
      const code = this.$store.getters.getCodeById("GreyCode");
      return code.complete;
    },
    getBestTest() {
      const test = this.$store.getters.getTestByName(this.name);
      console.log(test);
      return test.result.substr(0, 1);
    }
  },
  methods: {
    startTest() {
      this.testStarted = true;
      this.generateTasks();
      this.currentTask = 0;
      this.model = this.allTasks[this.currentTask];
      this.startTimer(this.minutesTotal);
    },
    startTimer(timeTotal) {
      this.timeLeft = timeTotal * 60;
      this.timer = setInterval(() => {
        console.log("tick");
        if (--this.timeLeft <= 0) {
          this.timeLeft = timeTotal * 60;
          this.timesUpDialog = true;
          clearInterval(this.timer);
        }
      }, 1000);
    },
    generateTasks() {
      let taskComplexity = this.complexity;
      for (let j = 0; j < this.taskAmount; j++) {
        let resultBinary = "";
        for (let i = 0; i < taskComplexity; i++) {
          resultBinary = resultBinary.concat(Math.random() < 0.5 ? "0" : "1");
        }
        this.code(resultBinary); //delete for correct answers to be pushed in cosnole
        this.allTasks.push(resultBinary);
        taskComplexity += 2;
      }
      console.log(this.allTasks);
    },
    submitAnswer() {
      if (this.currentTask < this.taskAmount) {
        this.allAnswers.push(this.answer);
        this.currentTask++;
        this.model = this.allTasks[this.currentTask];
        if (this.currentTask >= this.taskAmount) {
          clearInterval(this.timer);
          this.testStarted = false;
          this.dialog = true;
          this.checkAnswers();
          if (this.isTestPassed) {
            this.saveCompletedTest();
          }
        }
        this.answer = " ";
      }
    },
    checkAnswers() {
      for (let i = 0; i < this.taskAmount; i++) {
        const task = this.allTasks[i];
        const userAnswer = this.allAnswers[i];
        const correct = this.code(task);
        this.corrects.push(correct === userAnswer);
      }
      console.log(this.corrects);
    },
    cancel() {
      this.testStarted = false;
      this.timeLeft = this.minutesTotal;
      this.allTasks = [];
      this.allAnswers = [];
      this.corrects = [];
      this.model = " ";
      this.answer = " ";
      this.dialog = false;
      this.testStarted = false;
      this.currentTask = 0;
      clearInterval(this.timer);
    },
    saveCompletedTest() {
      const test = {
        codeName: this.name,
        result: `${this.correctTasks} / ${this.taskAmount}`,
        timeUsed: this.dateFormat(this.minutesTotal * 60 - this.timeLeft),
        date: new Date().toLocaleString()
      };
      this.$store.dispatch("createTestRecord", test);
      this.$store.dispatch("completeCode", { codecCode: "GreyCode" });
    },
    dateFormat(time) {
      let minutes = parseInt(time / 60, 10);
      let seconds = parseInt(time % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${seconds}`;
    }
  }
};
</script>
/
<style scoped>
/* to the testCompleteDialog */
.v-application--is-ltr
  .v-list-group--no-action.v-list-group--sub-group
  > .v-list-group__items
  > div
  > .v-list-item {
  padding-left: 40px !important;
}
</style>
