<template>
  <div class="counter-warp">
    {{msg}}
  </div>
</template>

<script>
// Use Vuex
// import store from './store'

export default {
  // computed: {
  //   count () {
  //     return store.state.count
  //   }
  // },

  methods: {
    // increment () {
    //   store.commit('increment')
    // },
    // decrement () {
    //   store.commit('decrement')
    // }
  },
  data() {
    return {
      msg: "评论"
    };
  },
  created() {
    console.log("加载了comment");
  }
}
</script>

<style scoped>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
</style>
