<template>
  <div class="Roster">
    <ul>
      <li><router-link to="/sb/route">Build Route</router-link></li>
      <li><router-link to="/sb" class="quit">Exit</router-link></li>
    </ul>

    <header class="header">
      <h1>Speed Boulder Roster</h1>
      <input class="new-player"
        autofocus
        autocomplete="off"
        placeholder="New Player"
        @keyup.enter="addPlayer">
    </header>
    <section class="main" v-show="players.length">
      <ul class="player-list">
        <player v-for="(player, index) in players" :key="index" :player="player"></player>
      </ul>
    </section>
    <div class="footer" v-show="players.length">
      <span class="player-count">
        <strong>{{ players.length }}</strong>
        {{ players.length | pluralize('player') }} registered
      </span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Player from './SBRosterView/Player'

  export default {
    components: {
      Player
    },
    computed: {
      ...mapState({
        players: state => state.roster.players
      })
    },
    methods: {
      addPlayer (e) {
        let name = e.target.value
        if (name.trim()) {
          this.$store.commit('roster/addPlayer', { name })
        }
        e.target.value = ''
      }
    },
    filters: {
      pluralize: (n, w) => n === 1 ? w : (w + 's')
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

  input {
    padding: 12px 20px;
    margin: 10px;
    box-sizing: border-box;
    color: ghostwhite;
    background-color: transparent;
    outline:none;
  }

  .footer {
    margin-top: 20px;
  }

  li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
