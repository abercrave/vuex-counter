<template lang="html">
  <div class="counter-controls">
    <v-button v-on:click.native="decrement" :isDisabled="decrementIsDisabled">-</v-button>
    <v-button v-on:click.native="increment">+</v-button>
  </div>
</template>

<script>
import Button from './Button'
import { DECREMENT, INCREMENT } from '@/constants/mutation-types';

export default {
  name: 'CounterControls',
  components: {
    'v-button': Button,
  },
  computed: {
    decrementIsDisabled() {
      return this.$store.state.counter.count === 0
    },
  },
  methods: {
    decrement() {
      this.$store.dispatch(DECREMENT)
    },
    increment() {
      this.$store.dispatch(INCREMENT)
    },
  },
}
</script>
