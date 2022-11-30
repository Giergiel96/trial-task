<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <DisplayTitle msg="Welcome to Your Vue.js App"/>
</template>

<script>
import DisplayTitle from './components/DisplayTitle.vue'

export default {
  name: 'App',
  components: {
    DisplayTitle,
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
