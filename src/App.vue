<template>
  <main id="app" v-bind:class="[statusClass]" >
    <img alt="Vue logo" src="./assets/logo.png">
    <Navigation />
    <router-view />
  </main>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation,
  },
  computed: {
    statusClass() {
      const category = this.$store.state.status.category || '';
      return category.toLowerCase()
    },
  },
}
</script>

<style lang="scss">
body {
  background-color: $background-color-body;
  color: $foreground-color-body;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  margin-top: 60px;
  text-align: center;
}
</style>
