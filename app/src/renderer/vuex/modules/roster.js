const namespaced = true

const state = {
  players: []
}

const mutations = {
  addPlayer (state, {name}) {
    state.players.push({
      name,
      times: []
    })
  },

  deletePlayer (state, {player}) {
    console.log(player)
    state.players.splice(state.players.indexOf(player), 1)
  },

  editPlayer (state, {player, name}) {
    player.name = name
  },

  deleteAllPlayers (state) {
    state.players = []
  }
}

export default {
  namespaced,
  state,
  mutations
}
