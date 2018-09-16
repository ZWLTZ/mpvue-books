<template>
  <div class="my-self">
    <p>{{msg}}</p>
  </div>
</template>

<script>
// import { formatTime } from "@/utils/index";

export default {
  // components: {
  //   card
  // },

  data() {
    return {
      msg: "个人中心"
    };
  },

  created() {
    console.log("加载了me");
  }
};
</script>

<style scoped>
.my-self{
  text-align: center;
}

</style>
