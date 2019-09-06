<template lang="html">
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
}
</script>

<style lang="scss" scoped>
  a {
    border-bottom: 2px solid transparent;
    color: $foreground-color-link;
    display: inline-block;
    font-weight: bold;
    margin: 0 1rem;
    text-decoration: none;
    transition: all .35s $easeInOutCubic;

    &:hover,
    &.router-link-exact-active {
      color: $foreground-color-body;
    }

    &.router-link-exact-active {
      border-color: $foreground-color-body;
    }
  }
</style>
