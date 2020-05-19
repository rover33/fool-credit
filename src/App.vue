<template>
  <div id="app">
    <CardComparison />
  </div>
</template>

<script>

import CardComparison from './components/CardComparison.vue'

export default {
  name: 'App',
  components: {
    CardComparison,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
