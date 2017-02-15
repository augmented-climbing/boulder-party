const game = {
  speedBoulder: {
    id: 'sb',
    name: 'Speed Boulder'
  }
}

const namespaced = true

const state = {
  active: null
}

const mutations = {
  playSB (state) {
    state.active = game.speedBoulder
  },
  playSpeedBoulder (state) {
    state.active = game.speedBoulder
  },
  end (state) {
    state.active = null
  }
}

const getters = {
  active (state) {
    return state.active
  },
  playing (state) {
    return state.active != null
  }
}

export default {
  namespaced,
  state,
  mutations,
  getters
}
