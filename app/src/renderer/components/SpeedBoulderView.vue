<template>
  <div>
  <h1>Speed Boulder</h1>
    <ul>
      <li><router-link to="/sb/roster">Play</router-link></li>
      <li><router-link to="/">Exit</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'speed-boulder'
  }
</script>

<style scoped>
  a {
    color: rgb(50, 174, 110);
    text-decoration: none;
  }

  a:hover {
    color: rgb(61, 216, 141);
  }

  a.quit:hover {
    color: rgb(228, 98, 69);
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
  }

  li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
