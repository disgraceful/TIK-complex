<template>
  <v-card flat>
    <v-container>
      <v-card-title class="justify-center">
        Код Грея. Практичний розділ</v-card-title
      >
      <v-card-text class="subtitle-1 text-center"
        >Перед проходженням тестування рекомендується виконати тренувальні
        вправи!
        <br />
        Усього виконано вправ: 6</v-card-text
      >
      <v-tabs v-model="active">
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="active">
        <v-tab-item v-for="item in items" :key="item">
          <keep-alive>
            <component :is="component(item)"></component>
          </keep-alive>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<script>
import GreyPracticeCode from "./GreyPracticeCode";
import GreyPracticeDecode from "./GreyPracticeDecode";
export default {
  data() {
    return {
      active: null,
      items: ["Кодування", "Декодування"]
      // code: () => import("./GreyPracticeCode"),
      // decode: () => import("./GreyPracticeDecode")
    };
  },
  components: {
    "my-greycode-practice": GreyPracticeCode,
    "my-greydecode-practice": GreyPracticeDecode
  },
  methods: {
    component(item) {
      return item === "Кодування" ? GreyPracticeCode : GreyPracticeDecode;
    }
  }
};
</script>
