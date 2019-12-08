<template>
  <v-card color="gry lighten-4" flat>
    <v-toolbar color="primary" :dark="true">
      <v-toolbar-title>Info&Code</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Список кодів</v-btn>
      <v-btn text>Додатки</v-btn>
      <v-btn text>Інфо</v-btn>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-avatar size="36px"> <v-icon>mdi-account-circle</v-icon> </v-avatar
        >{{ user.email }}</v-flex
      >
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "hatemyself393@gmail.com"
      }
    };
  }
};
</script>
