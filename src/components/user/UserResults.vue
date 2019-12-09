<template>
  <v-card flat>
    <v-container>
      <v-card-title class="title"> Пройдені тестування </v-card-title>
      <v-card-actions>
        <v-flex xs12 sm8 offset-sm2>
          <v-col v-for="test in tests" :key="test.codeName">
            <v-card>
              <v-card-title> Тестування {{ test.codeName }}</v-card-title>
              <v-card-text class="subtitle-1 black--text">
                <p>Виконано з оцінкою: {{ test.result }}</p>
                <p>За час: {{ test.timeUsed }}</p>
                <p>{{ test.date }}</p></v-card-text
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
