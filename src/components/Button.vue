<template lang="html">
  <button class="button" @click="onClick" :disabled="isDisabled">
    <slot>Click me!</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isDisabled: Boolean,
    onClick: Function,
  },
}
</script>

<style lang="scss">
.button {
  background-color: #2c3e50;
  color: #fff;
  border: 3px solid rgba(#2c3e50, .5);
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
    background-color: rgba(#2c3e50, .2);
    color: #2c3e50;
  }

  &[disabled] {
    opacity: .35;
  }
}
</style>
