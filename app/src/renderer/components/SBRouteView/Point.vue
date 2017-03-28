<template>
  <div class="shape"
    @dblclick.stop="deletePoint({point})"
    v-draggable
    :style="location">
    <div class="text">{{ point.id }}</div>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  import 'jquery-ui'

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
    computed: {
      ...mapState({
        route: state => state.route
      })
    },
    directives: {
      draggable: {
        bind: function (el, binding, vnode) {
          $(document).ready(() => {
            $(vnode.elm).draggable({
              disabled: !vnode.context.route.draggable
            })
          })
        },

        componentUpdated: function (el, binding, vnode) {
          $(vnode.elm).draggable(vnode.context.route.draggable ? 'enable' : 'disable')
        }
      }
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
    width: 50px;
    height: 50px;
  }

  .text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    cursor: default;
  }
</style>
