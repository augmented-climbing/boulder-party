<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background: black;
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    color: whitesmoke;
    justify-content: center;
    text-align: center;
  }
</style>
