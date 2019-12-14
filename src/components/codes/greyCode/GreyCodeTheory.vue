<template>
  <v-card flat>
    <v-container>
      <v-card-title class="justify-center">
        Код Грея. Теоретичні відомості
      </v-card-title>
      <v-card-text class="text-justify">
        <blockquote class="blockquote">
          Перетворення простого двійкового коду в код Грея виконується по
          алгоритму: Y<sub>n</sub> = X<sub>n</sub>; Y<sub>i</sub> = X<sub
            >i</sub
          >
          xor X<sub>i+1</sub> , (xor – додавання по модулю 2), де Y<sub>i</sub>
          – значення i-го розряду коду Грея; X<sub>i</sub>, X<sub>i+1</sub> –
          відповідні значення розрядів двійкового числа ( i = 1, 2, ..., n,
          рахуючи, розряд з i = 1 – наймолодший, i = n – найстарший ). Тобто,
          для всіх розрядів, крім наймолодшого, значення коду Грея дорівнює сумі
          по модулю 2 відповідного і наступного старшого розряду двійкового
          коду. Самый старший разряд сохраняется.
        </blockquote>
        <v-card-text class="subtitle-1">
          <p>Приклади</p>
          <ol>
            <li>
              <p>Закодувати число 10111101011 кодом Грея.</p>
              <p>
                Y<sub>11</sub> = X<sub>11</sub> = 1<br />Y<sub>10</sub> = X<sub
                  >10</sub
                >
                xor X<sub>11</sub> = 1<br />Y<sub>9</sub> = X<sub>9</sub> xor
                X<sub>10</sub> = 1<br />Y<sub>8</sub> = X<sub>8</sub> xor X<sub
                  >9</sub
                >
                = 0<br />Y<sub>7</sub> = X<sub>7</sub> xor X<sub>8</sub> = 0<br />Y<sub
                  >6</sub
                >
                = X<sub>6</sub> xor X<sub>7</sub> = 0<br />Y<sub>5</sub> = X<sub
                  >5</sub
                >
                xor X<sub>6</sub> = 1<br />Y<sub>4</sub> = X<sub>4</sub> xor
                X<sub>5</sub> = 1<br />Y<sub>3</sub> = X<sub>3</sub> xor X<sub
                  >4</sub
                >
                = 1<br />Y<sub>2</sub> = X<sub>2</sub> xor X<sub>3</sub> = 1<br />Y<sub
                  >1</sub
                >
                = X<sub>1</sub> xor X<sub>2</sub> = 0
              </p>
              <p>Результат кодування: 11100011110.</p>
            </li>
            <li>
              <p>Декодувати число 1110101, закодоване кодом Грея.</p>
              <p>
                X<sub>7</sub> = Y<sub>7</sub> = 1<br />X<sub>6</sub> = Y<sub
                  >7</sub
                >
                xor Y<sub>6</sub> = 0<br />X<sub>5</sub> = Y<sub>7</sub> xor
                Y<sub>6</sub> xor Y<sub>5</sub> = 1<br />X<sub>4</sub> = Y<sub
                  >7</sub
                >
                xor Y<sub>6</sub> xor Y<sub>5</sub> xor Y<sub>4</sub> = 1<br />X<sub
                  >3</sub
                >
                = Y<sub>7</sub> xor Y<sub>6</sub> xor Y<sub>5</sub> xor Y<sub
                  >4</sub
                >
                xor Y<sub>3</sub> = 0<br />
                X<sub>2</sub> = Y<sub>7</sub> xor Y<sub>6</sub> xor Y<sub
                  >5</sub
                >
                xor Y<sub>4</sub> xor Y<sub>3</sub> xor Y<sub>2</sub> = 0<br />X<sub
                  >1</sub
                >
                = Y<sub>7</sub> xor Y<sub>6</sub> xor Y<sub>5</sub> xor Y<sub
                  >4</sub
                >
                xor Y<sub>3</sub> xor Y<sub>2</sub> xor Y<sub>2</sub> = 1
              </p>
              <p>Результат декодування: 1011001.</p>
            </li>
          </ol>
        </v-card-text>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "GreyCodeTheory"
    };
  }
};
</script>
