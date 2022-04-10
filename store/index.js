export const state = () => ({
  overlay: false,
  areas: [
    { areaId: 1, title: 'ภาค 1', path: '1', coords: '', x: 0, y: 0 },
    { areaId: 2, title: 'ภาค 2', path: '2', coords: '', x: 0, y: 0 },
    { areaId: 3, title: 'ภาค 3', path: '3', coords: '', x: 0, y: 0 },
    { areaId: 4, title: 'ภาค 4', path: '4', coords: '', x: 0, y: 0 },
    { areaId: 5, title: 'ภาค 5', path: '5', coords: '', x: 0, y: 0 },
    {
      areaId: 6,
      title: 'ภาค 6',
      path: '6',
      coords:
        '179,8,197,13,209,14,221,1,254,7,272,27,279,82,305,75,335,86,338,131,331,191,312,248,245,286,222,294,220,242,182,245,175,292,135,269,133,256,156,236,143,202,170,178,175,134,167,119,166,77,176,53,189,29',
      x: 132,
      y: 0,
    },
    {
      areaId: 7,
      title: 'ภาค 7',
      path: '7',
      coords:
        '33,241,17,197,0,169,35,172,31,137,38,100,57,64,94,70,125,61,139,66,147,33,182,29,177,61,164,75,169,97,168,118,174,134,170,173,152,160,134,177,116,183,124,213,129,242,100,237,104,283,90,288,78,264,66,257,52,234',
      x: 0,
      y: 32,
    },
    {
      areaId: 8,
      title: 'ภาค 8',
      path: '8',
      coords: '',
      x: 0,
      y: 0,
    },
    { areaId: 9, title: 'ภาค 9', path: '9', coords: '', x: 0, y: 0 },
    { areaId: 10, title: 'ภาค 10', path: '10', coords: '', x: 0, y: 0 },
    { areaId: 11, title: 'ภาค 11', path: '11', coords: '', x: 0, y: 0 },
    { areaId: 12, title: 'ภาค 12', path: '12', coords: '', x: 0, y: 0 },
    { areaId: 13, title: 'ภาค 13', path: '13', coords: '', x: 0, y: 0 },
    { areaId: 14, title: 'ภาค 14', path: '14', coords: '', x: 0, y: 0 },
    { areaId: 15, title: 'ภาค 15', path: '15', coords: '', x: 0, y: 0 },
    { areaId: 16, title: 'ภาค 16', path: '16', coords: '', x: 0, y: 0 },
    { areaId: 17, title: 'ภาค 17', path: '17', coords: '', x: 0, y: 0 },
    { areaId: 18, title: 'ภาค 18', path: '18', coords: '', x: 0, y: 0 },
  ],
})

export const getters = {
  getOverlay(state) {
    return state.overlay
  },
  getAreas(state) {
    return state.areas
  },
}

export const mutations = {
  SET_OVERLAY(state, payload) {
    state.overlay = payload
  },
}

export const actions = {
  finishOverlay({ commit }) {
    commit('SET_OVERLAY', false)
  },
  startOverlay({ commit }) {
    commit('SET_OVERLAY', true)
  },
}
