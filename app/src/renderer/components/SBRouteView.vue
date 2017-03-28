<template>
  <div class="route">
    <ul class="nav">
      <li><router-link to="/sb/route">Start</router-link></li>
      <li><router-link to="/sb" class="quit">Exit</router-link></li>
    </ul>

    <section class="canvas" @dblclick="addPoint">
      <point v-for="(point, index) in route.points" :key="index" :point="point" class="point"></point>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Point from './SBRouteView/Point'

  export default {
    components: {
      Point
    },
    computed: {
      ...mapState({
        route: state => state.route
      })
    },
    methods: {
      addPoint (e) {
        console.log(e)
        const radius = this.route.pointWidth
        this.$store.commit('route/addPoint', {
          left: e.x - radius,
          top: e.y - radius
        })
      }
    }
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

  .nav {
    position: absolute;
    top: 0;
    z-index: 10;
  }

  .canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

  button {
    background-color: whitesmoke;
    font-size: 15px;
  }
</style>
