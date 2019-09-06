<template>
  <div class="home">
    <Counter message="Use the buttons to update the counter!"/>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name: 'home',
  components: {
    Counter,
  },
}
</script>
