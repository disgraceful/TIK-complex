<template>
  <v-card color="gry lighten-4" flat>
    <v-toolbar color="primary" :dark="true">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Список кодів</v-btn>
      <v-btn text to="/add">Додатки</v-btn>
      <v-btn text to="/info">Інфо</v-btn>
      <v-spacer></v-spacer>
      <router-link
        :to="{ name: 'user-results', params: { id: 'rfeu9erwpewjoprtfio' } }"
        tag="div"
        class="link"
      >
        <v-flex shrink>
          <v-avatar size="36px"> <v-icon>mdi-account-circle</v-icon> </v-avatar
          >{{ user.email }}</v-flex
        >
      </router-link>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: `Info&Code`
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style scoped>
.link {
  cursor: pointer;
}
</style>
