<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <CounterOutput />
    <CounterControls />
  </div>
</template>

<script>
import CounterOutput from './CounterOutput.vue'
import CounterControls from './CounterControls.vue'

export default {
  name: 'Counter',
  components: {
    CounterOutput,
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
</style>
