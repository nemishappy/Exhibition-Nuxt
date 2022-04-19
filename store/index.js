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
      areaID: 1, 
      projectID: 11,
      title: 'จังหวัด...',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa, blandit sed hendrerit ac, imperdiet rutrum diam. Etiam sed urna sed dui facilisis scelerisque a eu orci. Nulla blandit turpis vitae turpis suscipit lobortis. Curabitur porta vestibulum eleifend. Suspendisse potenti. Fusce porta porttitor ornare. Donec aliquet egestas enim, sit amet lacinia lorem scelerisque vel. In urna lectus, euismod et tempor at, fermentum vitae nisi. Praesent lacinia dolor cursus, convallis magna et, posuere lectus. Proin ac posuere nisi. \
Praesent eget massa et nisi volutpat faucibus sit amet id risus. Ut dapibus efficitur magna, ut tristique lorem venenatis nec. In iaculis malesuada tincidunt. Proin vestibulum ipsum sed erat vehicula, ut tristique urna varius. Mauris facilisis neque eget nisl commodo dignissim in at tortor. Etiam a tellus vel turpis consequat vestibulum. Aliquam dignissim libero ac ligula malesuada, commodo tempor eros vehicula. Nulla auctor scelerisque nunc, at efficitur nunc feugiat et. Ut eu erat tortor. Nullam semper sem eleifend magna varius, ut venenatis felis varius. Nam tincidunt maximus sapien, id bibendum est hendrerit ut. Maecenas sapien est, suscipit ac nulla accumsan, egestas pharetra nisi. Sed non erat egestas, aliquam ipsum ac, tincidunt sem.',
      coverimg: 'https://i.imgur.com/DHBrzdp.png', // url img from storage
      urlVideo: 'https://www.youtube.com/watch?v=KfcjTwGy5UU', // url youtube
      urlPDF: '', // url PDF from storage
      x: 0, // position on left of image
      y: 0, // position on top of image
    },
    {
      areaID: 1,
      projectID: 12,
      title: 'จังหวัด...2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa, blandit sed hendrerit ac, imperdiet rutrum diam. Etiam sed urna sed dui facilisis scelerisque a eu orci. Nulla blandit turpis vitae turpis suscipit lobortis. Curabitur porta vestibulum eleifend. Suspendisse potenti. Fusce porta porttitor ornare. Donec aliquet egestas enim, sit amet lacinia lorem scelerisque vel. In urna lectus, euismod et tempor at, fermentum vitae nisi. Praesent lacinia dolor cursus, convallis magna et, posuere lectus. Proin ac posuere nisi. \
Praesent eget massa et nisi volutpat faucibus sit amet id risus. Ut dapibus efficitur magna, ut tristique lorem venenatis nec. In iaculis malesuada tincidunt. Proin vestibulum ipsum sed erat vehicula, ut tristique urna varius. Mauris facilisis neque eget nisl commodo dignissim in at tortor. Etiam a tellus vel turpis consequat vestibulum. Aliquam dignissim libero ac ligula malesuada, commodo tempor eros vehicula. Nulla auctor scelerisque nunc, at efficitur nunc feugiat et. Ut eu erat tortor. Nullam semper sem eleifend magna varius, ut venenatis felis varius. Nam tincidunt maximus sapien, id bibendum est hendrerit ut. Maecenas sapien est, suscipit ac nulla accumsan, egestas pharetra nisi. Sed non erat egestas, aliquam ipsum ac, tincidunt sem.',
      coverimg: 'https://i.imgur.com/DHBrzdp.png', // url img from storage
      urlVideo: 'https://www.youtube.com/watch?v=KfcjTwGy5UU',
      urlPDF: '', // url PDF from storage
      x: 300, // position on left of image
      y: 120, // position on top of image
    },
    {
      areaID: 6,
      projectID: 61,
      title: 'โรงเรียนร้องแหย่งวิทยาคม วัดวุฒิมงคล จังหวัดแพร่',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim massa, blandit sed hendrerit ac, imperdiet rutrum diam. Etiam sed urna sed dui facilisis scelerisque a eu orci. Nulla blandit turpis vitae turpis suscipit lobortis. Curabitur porta vestibulum eleifend. Suspendisse potenti. Fusce porta porttitor ornare. Donec aliquet egestas enim, sit amet lacinia lorem scelerisque vel. In urna lectus, euismod et tempor at, fermentum vitae nisi. Praesent lacinia dolor cursus, convallis magna et, posuere lectus. Proin ac posuere nisi. \
Praesent eget massa et nisi volutpat faucibus sit amet id risus. Ut dapibus efficitur magna, ut tristique lorem venenatis nec. In iaculis malesuada tincidunt. Proin vestibulum ipsum sed erat vehicula, ut tristique urna varius. Mauris facilisis neque eget nisl commodo dignissim in at tortor. Etiam a tellus vel turpis consequat vestibulum. Aliquam dignissim libero ac ligula malesuada, commodo tempor eros vehicula. Nulla auctor scelerisque nunc, at efficitur nunc feugiat et. Ut eu erat tortor. Nullam semper sem eleifend magna varius, ut venenatis felis varius. Nam tincidunt maximus sapien, id bibendum est hendrerit ut. Maecenas sapien est, suscipit ac nulla accumsan, egestas pharetra nisi. Sed non erat egestas, aliquam ipsum ac, tincidunt sem.',
      coverimg: 'https://i.imgur.com/pA8ALhe.png', // url img from storage
      urlVideo: 'https://www.youtube.com/watch?v=57ZNaI0ZTqg', // url youtube
      urlPDF: '', // url PDF from storage
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
