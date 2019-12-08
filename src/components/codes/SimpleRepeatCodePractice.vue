<template>
  <code-practice
    :welcome="welcome"
    :components="[code, decode]"
  ></code-practice>
</template>

<script>
// import CodePractice from "../shared/CodePractice";
export default {
  data() {
    return {
      name: "SimpleRepeatCodePractice",
      welcome: "Practice Simple Repeat Code before taking the test!"
      // code: () => import("./simpleRepeatCode/SimpleRepeatCode"),
      // decode: () => import("./simpleRepeatCode/SimpleRepeatDecode")
    };
  },
  components: { "code-practice": CodePractice }
};
</script>
