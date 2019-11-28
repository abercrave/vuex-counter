<template lang="html">
  <button class="button" :disabled="isDisabled">
    <slot>Click me!</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isDisabled: Boolean,
  },
}
</script>

<style lang="scss">
.button {
  background-color: $color-1;
  color: $color-4;
  border: 3px solid rgba($color-1, .5);
  border-radius: .5rem;
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  height: 3rem;
  line-height: .8;
  margin: 1rem;
  min-width: 3rem;
  outline: none;
  padding: .5rem;
  transition: background-color .35s $easeInOutCubic, color .35s $easeInOutCubic;

  &:active {
    background-color: rgba($color-1, .2);
    color: $color-1;
  }

  &[disabled] {
    opacity: .35;
  }
}
</style>
