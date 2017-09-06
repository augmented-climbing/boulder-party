<template>
  <vue-draggable-resizable :w="{{ diameter }}" :h="{{ diameter }}" :parent="true" :@dblclick.stop="deletePoint({point})">
    <div class="shape">
      <div class="text">{{ point.id }}</div>
    </div>
  </vue-draggable-resizable>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    name: 'Point',
    props: ['point'],
    data () {
      return {
        location: {
          position: 'relative',
          left: this.point.left + 'px',
          top: this.point.top + 'px'
        }
      }
    },
    components: {
      VueDraggableResizable
    },
    computed: {
      ...mapState({
        route: state => state.route
      })
    },
    methods: {
      ...mapMutations('route', [
        'deletePoint'
      ])
    }
  }
</script>

<style scoped>
  .shape {
    border-radius: 50%;
    background: white;
    color: black;
    width: 100%;
    height: 100%;
  }

  .text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    cursor: default;
  }
</style>
