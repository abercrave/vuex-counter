<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <Counter />
    <CounterControls />
  </div>
</template>

<script>
import Counter from './Counter.vue'
import CounterControls from './CounterControls.vue'

export default {
  name: 'HelloWorld',
  components: {
    Counter,
    CounterControls,
  },
  props: {
    message: String,
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
