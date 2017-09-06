const namespaced = true

const state = {
  points: [],
  draggable: true,
  diameter: 50
}

const mutations = {
  addPoint (state, {left, top}) {
    state.points.push({
      id: state.points.length + 1,
      left,
      top
    })
  },

  deletePoint (state, {point}) {
    console.log(point)
    state.points.splice(state.points.indexOf(point), 1)
    state.points.forEach(function (point, index) {
      point.id = index + 1
    })
  },

  clearPoints (state) {
    state.points = []
  },

  diameter (state) {
    return state.diameter
  }
}

export default {
  namespaced,
  state,
  mutations
}
