<style lang="stylus">
*
  margin 0
  padding 0
  line-height 1
  font-family Microsoft Yahei
a
  text-decoration none
  color inherit
h2
h1
  font-weight normal
ul
ol
  list-style none
em
i
  font-style normal
.w1100
  width 1100px
  margin 0 auto
</style>

<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./page/Header";
import MyFooter from "./page/Footer";
export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

