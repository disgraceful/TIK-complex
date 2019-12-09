<template>
  <v-card flat>
    <v-container>
      <v-card-title class="headline">
        Сторінка користувача
      </v-card-title>
      <v-card-text>{{ user.email }}</v-card-text>
      <v-card-actions>
        <v-btn text large>Редагувати профіль</v-btn>
        <v-btn
          text
          large
          :to="{ name: 'user-results', params: { id: user.id } }"
          >Переглянути тести</v-btn
        >
        <v-btn text large>Вийти з системи</v-btn>
      </v-card-actions>
    </v-container>
    <router-view />
  </v-card>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
