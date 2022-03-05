<template>
  <div class="main">
    <p>ここは２番目のページです</p>
  </div>
  <tab-menu></tab-menu>
  <router-view></router-view>
</template>

<script setup>
import TabMenu from '@/components/TabMenu'


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
