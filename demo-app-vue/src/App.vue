<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './assets/index.scss';

#app {
    background: rgba(16, 25, 66, 1);
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
}
</style>
