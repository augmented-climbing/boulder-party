<template>
  <li class="player">
    <div class="view">
      <label v-if="editing == false" v-text="player.name" @click="editing = true"></label>
      <input class="edit"
             v-show="editing"
             v-focus="editing"
             :value="player.name"
             @keyup.enter="doneEdit"
             @keyup.esc="cancelEdit"
             @blur="doneEdit">
      <button class="destroy" @click="deletePlayer({player})">X</button>
    </div>
  </li>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'Player',
    props: ['player'],
    data () {
      return {
        editing: false
      }
    },
    directives: {
      focus (el, { value }, { context }) {
        if (value) {
          context.$nextTick(() => {
            el.focus()
          })
        }
      }
    },
    methods: {
      ...mapMutations('roster', [
        'editPlayer',
        'deletePlayer'
      ]),
      doneEdit (e) {
        const value = e.target.value.trim()
        const { player } = this
        if (!value) {
          this.deletePlayer({
            player
          })
        } else if (this.editing) {
          this.editPlayer({
            player,
            value
          })
          this.editing = false
        }
      },
      cancelEdit (e) {
        e.target.value = this.player.name
        this.editing = false
      }
    }
  }
</script>

<style scoped>
  button {
    background-color: transparent;
    color: #747474;
    border: none;
  }

  li {
    font-size: 25px;
  }
</style>
