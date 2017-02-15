<template>
  <div>
  <h1>Speed Boulder</h1>
  <router-link to="/">Exit</router-link>
  </div>
</template>

<script>
  export default {
    name: 'speed-boulder',
    created () {
      this.$store.commit('game/playSB')
    }
  }
</script>

<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;
  }

  a:hover {
    color: rgb(40, 56, 76);
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li { display: inline-block; }
</style>
