<template lang="html">
  <div class="counter">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'CounterOutput',
  computed: {
    count() {
      return this.$store.state.counter.count
    },
  },
}
</script>

<style lang="scss">
@include error-animation;
@include info-animation;

.counter {
  background-color: $color-2;
  color: $color-4;
  font-size: 4rem;
  font-weight: bold;
  padding: 4rem;
  transition: background-color .5s $cubicInOut;

  @include error;
  @include info;
}
</style>
