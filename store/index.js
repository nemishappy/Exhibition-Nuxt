export const state = () => ({
  overlay: false,
  dialog: {
    isShow: false,
    title: '',
    message: '',
    stAction: '',
    ndAction: '',
  },
  // data project
  projects: [
    {
      areaID: 6,
      projectID: 61,
      title: 'โรงเรียนร้องแหย่งวิทยาคม วัดวุฒิมงคล จังหวัดแพร่',
      content: "รอข้อมูล",
      coverimg: 'https://i.imgur.com/pA8ALhe.png', // url img from storage
      urlVideo: 'https://www.youtube.com/watch?v=57ZNaI0ZTqg',
      Downloadurlvideo: 'https://www.ssyoutube.com/watch?v=57ZNaI0ZTqg',
      urlPDF: 'https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%206%2F%E0%B8%87%E0%B8%9A.64.%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%A5%E0%B9%84%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%87%E0%B8%B2%E0%B8%99_%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%81.pdf?alt=media&token=91986162-7687-445d-916b-0fa44f240715', // url PDF from storage
      x: 190, // position on left of image
      y: 354, // position on top of image
    },
  ],
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
}
