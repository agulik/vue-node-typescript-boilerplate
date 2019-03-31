<template>
  <div id="app">
    <NavigationBar/>
    <Home/>
  </div>
</template>

<script lang="ts">
import NavigationBar from "./components/NavigationBar.vue"
import Home from "./components/Home.vue"

export default {
  name: "app",
  components: {
    NavigationBar,
    Home
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #ecf0f1;
}
</style>
