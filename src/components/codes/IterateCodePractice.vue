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
      name: "IterateCodePractice",
      welcome: "Practice Iterate Code before taking the test!"
      // code: () => import("./iterateCode/IterateCode"),
      // decode: () => import("./iterateCode/IterateDecode")
    };
  },
  components: { "code-practice": CodePractice }
};
</script>
