<template>
  <div class="box">
    <Dialog @stClick="downloadPDF" @ndClick="hideDialog"/>
    <h2>{{ project.title }}</h2>
    <div class="row">
      <div class="column justify-center align-center">
        <div>
          <video-player :src="project.urlVideo" />
        </div>
      </div>
      <div class="column justify-center">
        <div class="d-flex flex-column">
          <v-responsive class="content overflow-y-auto" max-height="400px">
            <p>{{ project.content }}</p>
          </v-responsive>
          <v-btn
            class="action no-uppercase"
            text
            color="primary"
            @click.prevent="openDialog"
            >download PDF</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import Dialog from '~/components/Dialog'

require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer,
    Dialog
  },
  data() {
    return {
      routeID: '',
      project: {},
    }
  },
  created() {
    this.routeID = this.$route.params.pid
    var store = this.$store.getters.getProjects.filter(
      (project) =>
        project.areaID == this.$route.params.id &&
        project.projectID == this.routeID
    )
    console.log(store.length)
    if (store.length == 0) {
      store = this.$store.getters.getProjects.filter(
        (project) => project.areaID === 1 && project.projectID == this.routeID
      )
    }
    this.project = store[0]
    console.log(this.project)
  },
  methods: {
    openDialog(){
      this.$store.dispatch('setDialog', {
        isShow: true,
        title: 'ยินยอมนโยบายความเป็นส่วนตัว',
        message: 'ข้อมูลส่วนบุคคลที่ถูกบันทึกอยู่ในไฟล์ .pdf <p class="font-weight-bold">ไม่อนุญาตให้นำไปแสวงหาผลประโยชน์ในด้านใดๆทั้งสิ้น</p>',
        stAction: 'ยอมรับ',
        ndAction: 'ไม่ยอมรับ',
      })
    },
    hideDialog() {
      this.$store.dispatch('setDialog', {
        isShow: false,
        title: '',
        message: '',
        stAction: '',
        ndAction: '',
      })
    },

    downloadPDF() { 
      // const resumeRef = this.$fire.storage.ref('filePDF')
      // resumeRef
      //   .getDownloadURL()
      //   .then((url) => {
      //     // `url` is the download URL
      //     console.log(url)
      //     // This can be downloaded directly:
      //     const xhr = new XMLHttpRequest()
      //     xhr.responseType = 'blob'
      //     xhr.onload = function () {
      //       const blob = xhr.response
      //       const link = document.createElement('a')
      //       link.href = URL.createObjectURL(blob)
      //       link.download = 'tenzin_resume'
      //       link.click()
      //       URL.revokeObjectURL(link.href)
      //     }
      //     xhr.open('GET', url)
      //     xhr.send()
      //   })
      //   .catch((error) => {
      //     // Handle any errors
      //     switch (error.code) {
      //       case 'storage/object-not-found':
      //         // File doesn't exist
      //         break

      //       case 'storage/unauthorized':
      //         // User doesn't have permission to access the object
      //         break

      //       case 'storage/canceled':
      //         // User canceled the upload
      //         break

      //       case 'storage/unknown':
      //         // Unknown error occurred, inspect the server response
      //         break
      //       default:
      //         break
      //     }
      //   })
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
}
.row {
  display: flex;
  padding: 12px;
  .column {
    padding: 12px;
    display: flex;
    flex-direction: column;
    flex: 60%;
    .v-player {
      max-height: 300px;
      width: 533.33px;
    }
    .content {
      padding: 10px 0;
      flex: 90%;
    }
    .action {
      margin: 10px 0;
      flex: 10%;
    }
    &:nth-child(even) {
      flex: 40%;
    }
  }
}
</style>
