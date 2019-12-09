<template>
  <v-card flat>
    <v-container>
      <v-card-title class="justify-center">
        Код Грея. Теоретичні відомості
      </v-card-title>
      <v-card-text class="text-justify">
        <blockquote class="blockquote">
          Преобразование простого двоичного кода в код Грея производится по
          алгоритму: Y<sub>n</sub> = X<sub>n</sub>; Y<sub>i</sub> = X<sub
            >i</sub
          >
          xor X<sub>i+1</sub> , (xor – суммирование по модулю 2), где Y<sub
            >i</sub
          >
          – значение i-го разряда кода Грея; X<sub>i</sub>, X<sub>i+1</sub> –
          соответствующие значения разрядов двоичного числа ( i = 1, 2, ..., n,
          считая, разряд с i = 1 – младший, i = n – старший ). Т.е., для всех
          разрядов, кроме младшего, значение кода Грея равно сумме по модулю 2
          соответствующего и следующего более старшего разрядов двоичного кода.
          Самый старший разряд сохраняется.
        </blockquote>
        <v-card-text class="subtitle-1">
          <p>Примеры.</p>
          <ol>
            <li>
              <p>Закодировать число 10111101011 кодом Грея.</p>
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
              <p>Результат кодирования: 11100011110.</p>
            </li>
            <li>
              <p>Декодировать число 1110101, закодированное кодом Грея.</p>
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
              <p>Результат декодирования: 1011001.</p>
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
