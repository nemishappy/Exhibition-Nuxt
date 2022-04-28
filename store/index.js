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
  getProjectsHP(state) {
    return state.projects.filter((project) => project.type.tid === 1)
  },
  getProjectsDD(state) {
    return state.projects.filter((project) => project.type.tid === 2)
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
  async setProjectInArea({ commit }, data) {
    commit('SET_PROJECTLOADED', false)
    commit('CLEAR_PROJECTS')
    const dataBase = this.$fire.firestore.collection(`area${data}`)
    const dbResults = await dataBase.get()
    dbResults.forEach((doc) => {
      commit('ADD_PROJECT', doc.data())
      console.log(doc.data())
    })

    commit('SET_PROJECTLOADED', true)
  },
  async setAllProject({ commit, getters }) {
    commit('SET_PROJECTLOADED', false)
    if (getters.getProjects.length < 10) {
      commit('CLEAR_PROJECTS')
      for (let index = 1; index < 19; index++) {
        const dataBase = this.$fire.firestore.collection(`area${index}`)
        const dbResults = await dataBase.get()
        dbResults.forEach((doc) => {
          commit('ADD_PROJECT', doc.data())
          // console.log(doc.data())
        })
      }
    }
    commit('SET_PROJECTLOADED', true)
  },
  async loadProject({ commit, getters }, data) {
    commit('SET_PROJECTLOADED', false)
    if (getters.getProjects.length == 0) {
      await this.$fire.firestore
        .collection(`area${data.id}`)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (doc.data().projectID == data.pid)
              commit('SET_PROJECT', doc.data())
            console.log(doc.id, ' => ', doc.data())
          })
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
    } else {
      var store = getters.getProjects.filter(
        (project) => project.projectID == data.pid
      )
      console.log(store)
      commit('SET_PROJECT', store[0])
    }

    commit('SET_PROJECTLOADED', true)
  },
}
