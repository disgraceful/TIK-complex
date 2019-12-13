<template>
  <v-card flat>
    <v-container>
      <v-card-title class="justify-center">Код Грея. Тестування</v-card-title>
      <v-card-text class="subtitle-1 text-center"
        >Перед проходженням тестування рекомендується переглянути теорію і
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
      <v-container>
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
                filled
                height="15px"
                dense
              >
              </v-text-field>
            </v-col>
          </v-flex>
          <v-flex xs4>
            <v-col class="text-right">
              Виконано завдань:
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
      </v-container>

      <v-layout xs6 sm12 offset-sm-1>
        <v-btn class="ma-2" color="primary" :disabled="valid" @click="submit"
          >Підтвердити</v-btn
        >
        <v-btn class="ma-2" :disabled="!testStarted" @click="cancel">
          Відмінити
        </v-btn>
      </v-layout>
      <!-- to separate component -->
      <v-dialog v-model="dialog" max-width="340px" hide-overlay>
        <v-card>
          <v-card-title class="headline">Тестування пройдено!</v-card-title>
          <v-card-text class="subtitle-1 black--text">
            Правильних відповідей: 4/{{ taskAmount }}
          </v-card-text>
          <v-expansion-panels>
            <v-expansion-panel v-for="(task, i) in allTasks" :key="i">
              <v-expansion-panel-header disable-icon-rotate
                >Завдання {{ i + 1 }}
                <template v-slot:actions>
                  <v-icon v-if="i == 4" color="error">mdi-alert-circle</v-icon>
                  <v-icon v-else color="teal">mdi-check</v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-flex>Умова: {{ task }}</v-flex>
                <v-flex>Відповідь:{{ allAnswers[i] }}</v-flex>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Спробувати знову
            </v-btn>

            <v-btn color="green darken-1" text @click="dialog = false">
              Вихід
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      model: "",
      answer: "",
      dialog: false,
      rules: {
        required: value => !!value || "Введіть відповідь",
        binary: value => /^[01]+$/.test(value) || "Тільки '0' або '1' дозволені"
      },
      allTasks: [],
      allAnswers: [],
      currentTask: 0,
      taskAmount: 5,
      complexity: 4,
      tasksCompleted: 0,
      minutesTotal: 1,
      timeLeft: 1 * 60,
      testStarted: false
    };
  },
  computed: {
    valid() {
      return this.answer === "" || this.answer === undefined;
    },
    date() {
      let minutes = parseInt(this.timeLeft / 60, 10);
      let seconds = parseInt(this.timeLeft % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${seconds}`;
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
    startTimer(timer) {
      this.timeLeft = timer * 60;
      setInterval(() => {
        if (--this.timeLeft < 0) {
          this.timerLeft = timer * 60;
          return;
        }
      }, 1000);
    },
    generateTasks() {
      for (let j = 0; j < this.taskAmount; j++) {
        let resultBinary = "";
        for (let i = 0; i < this.complexity; i++) {
          resultBinary = resultBinary.concat(Math.random() < 0.5 ? "0" : "1");
        }
        this.allTasks.push(resultBinary);
        this.complexity += 2;
      }
      console.log(this.allTasks);
    },
    submit() {
      if (this.currentTask < this.taskAmount) {
        this.allAnswers.push(this.answer);
        this.currentTask++;
        this.model = this.allTasks[this.currentTask];
        if (this.currentTask >= this.taskAmount) {
          this.dialog = true;
        }
        this.answer = " ";
      }
    },
    cancel() {
      this.testStarted = false;
      this.timeLeft = this.minutesTotal;
      this.allTasks = [];
      this.allAnswers = [];
      tasksCompleted = 0;
    },
    saveCompletedTest(){
      const test = {},
      this.$store.dispatch('createTestRecord',test);
    }
  }
};
</script>
