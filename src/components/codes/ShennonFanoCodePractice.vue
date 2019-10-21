<template>
  <code-practice :welcome="welcome" :components="[code,decode]"></code-practice>
</template>

<script>
import CodePractice from "../shared/CodePractice";
export default {
  data() {
    return {
      name: "ShennonFanoCodePractice",
      welcome: "Practice Shennon-Fano Code before taking the test!",
      code: () => import("./shennonFanoCode/ShennonFanoCode"),
      decode: () => import("./shennonFanoCode/ShennonFanoDecode")
    };
  },
  components: { "code-practice": CodePractice }
};
</script>