<template>
  <v-card flat>
    <v-container>
      <v-card-title class="title"> Пройдені тестування </v-card-title>
      <v-card-actions>
        <v-flex xs12 sm10 offset-sm1>
          <v-col v-for="test in tests" :key="test.date">
            <v-card>
              <v-card-title class="justify-center">
                {{ test.codeName }}</v-card-title
              >
              <v-card-text class="subtitle-1 black--text">
                <p>Виконано з оцінкою: {{ test.result }}</p>
                <p>За час: {{ test.timeUsed }}</p>
                <p>Дата проходження: {{ test.date }}</p></v-card-text
              >
            </v-card>
          </v-col>
        </v-flex>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  computed: {
    tests() {
      return this.$store.getters.getCompletedTests;
    }
  }
};
</script>
