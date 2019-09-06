<template>
  <main id="app" v-bind:class="[statusClass]" >
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld message="Welcome to Your Vue.js App" />
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  computed: {
    statusClass() {
      const category = this.$store.state.status.category || '';
      return category.toLowerCase()
    },
  },
}
</script>

<style>
/* @import './styles/animation/main.scss'; */

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
