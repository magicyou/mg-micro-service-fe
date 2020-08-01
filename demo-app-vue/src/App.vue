<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import './assets/index.scss';

#app {
    background: rgba(16, 25, 66, 1);
}
</style>
