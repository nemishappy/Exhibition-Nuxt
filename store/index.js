export const state = () => ({
  overlay: false,
  dialog: {
    isShow: false,
    title: '',
    message: '',
    stAction: '',
    ndAction: '',
  },
  projectLoaded: false,
  projects: [],
  project: {
    areaID: null,
    projectID: null,
    title: '',
    content: '',
    urlImg: '', // url img from storage
    urlVideo: '',
    downloadurlvideo: '',
    urlPDF: '',
    x: 0, // position on left of image
    y: 0, // position on top of image
  },
})

export const getters = {
  getOverlay(state) {
    return state.overlay
  },
  getDialog(state) {
    return state.dialog
  },
  getProjects(state) {
    return [...state.projects]
  },
  getProject(state) {
    return state.project
  },
  getProjectLoaded(state) {
    return state.projectLoaded
  },
}

export const mutations = {
  SET_OVERLAY(state, payload) {
    state.overlay = payload
  },
  SET_DIALOG(state, payload) {
    state.dialog = {
      ...state.dialog,
      ...payload,
    }
  },
  ADD_PROJECT(state, payload) {
    state.projects.push(payload)
  },
  CLEAR_PROJECTS(state) {
    state.projects = []
  },
  SET_PROJECTLOADED(state, payload) {
    state.projectLoaded = payload
  },
  SET_PROJECT(state, payload) {
    state.project = { ...state.project, ...payload }
  },
}

export const actions = {
  finishOverlay({ commit }) {
    commit('SET_OVERLAY', false)
  },
  startOverlay({ commit }) {
    commit('SET_OVERLAY', true)
  },
  setDialog({ commit }, data) {
    commit('SET_DIALOG', data)
  },
  async setProjectInArea({ commit, getters }, data) {
    commit('SET_PROJECTLOADED', false)
    // load project in area
    if (getters.getProjects.length < 11) {
      commit('CLEAR_PROJECTS')
      const dataBase = this.$fire.firestore.collection(`area${data}`)
      const dbResults = await dataBase.get()
      dbResults.forEach((doc) => {
        commit('ADD_PROJECT', doc.data())
      })
    }

    commit('SET_PROJECTLOADED', true)
  },
  async setAllProject({ commit, getters }) {
    commit('SET_PROJECTLOADED', false)
    // load all project
    if (getters.getProjects.length < 11) {
      commit('CLEAR_PROJECTS')
      for (let index = 1; index < 19; index++) {
        const dataBase = this.$fire.firestore.collection(`area${index}`)
        const dbResults = await dataBase.get()
        dbResults.forEach((doc) => {
          
          commit('ADD_PROJECT', doc.data())
        })
      }
    }
    commit('SET_PROJECTLOADED', true)
  },
  async loadProject({ commit, getters }, data) {
    commit('SET_PROJECTLOADED', false)
    // load specific project
    if (getters.getProjects.length == 0) {
      // no data in store => fetch from db
      await this.$fire.firestore
        .collection(`area${data.id}`)
        .doc(data.pid)
        .get()
        .then((doc) => {
          commit('SET_PROJECT', doc.data())
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
    } else {
      // have data in store => qurry data from store
      var store = getters.getProjects.filter(
        (project) => project.projectID == data.pid
      )
      commit('SET_PROJECT', store[0])
    }

    commit('SET_PROJECTLOADED', true)
  },
}
