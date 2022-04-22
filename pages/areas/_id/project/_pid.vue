<template>
  <div class="box">
    <v-container>
      <div class="mini-spacer-30">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2>{{ project.title }}</h2>
              <p>มีพื้นที่งานจัดแสดงทั้งหมด 2 พื้นที่</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <Dialog @stClick="downloadPDF" @ndClick="hideDialog" />

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
            <ul>
              <v-btn
                class="action no-uppercase"
                text
                color="primary"
                :href="project.downloadUrlVideo"
                >ดาวน์โหลดคลิปวิดีโอ</v-btn
              >
              <v-btn
                class="action no-uppercase"
                text
                color="primary"
                @click.prevent="openDialog"
                >ดาวน์โหลดเอกสาร</v-btn
              >
            </ul>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import Dialog from '~/components/Dialog'

require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer,
    Dialog,
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
    // console.log(store.length)
    if (store.length == 0) {
      store = this.$store.getters.getProjects.filter(
        (project) => project.areaID === 1 && project.projectID == this.routeID
      )
    }
    this.project = store[0]
    // console.log(this.project)
  },
  methods: {
    openDialog() {
      this.$store.dispatch('setDialog', {
        isShow: true,
        title: 'ยินยอมนโยบายความเป็นส่วนตัว',
        message:
          'ข้อมูลส่วนบุคคลที่ถูกบันทึกอยู่ในไฟล์ .pdf <p class="font-weight-bold">ไม่อนุญาตให้นำไปแสวงหาผลประโยชน์ในด้านใดๆทั้งสิ้น</p>',
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

    async downloadPDF() {
      // var httpsReference = this.$fire.storage.refFromURL(this.project.urlPDF)
      // await httpsReference
      //   .getDownloadURL()
      //   .then((url) => {
      //     // `url` is the download URL for 'images/stars.jpg'
      //     console.log(url);
      //     // This can be downloaded directly:
      //     var xhr = new XMLHttpRequest()
      //     xhr.responseType = 'blob'
      //     xhr.onload = (event) => {
      //       var blob = xhr.response
      //     }
      //     xhr.open('GET', url)
      //     xhr.send()

      //   })
      //   .catch((error) => {
      //     // Handle any errors
      //     console.log(error);
      //   })
      var xhr = new XMLHttpRequest()
      xhr.responseType = 'blob'
      xhr.onload = (event) => {
        var blob = xhr.response
      }
      xhr.open('GET', this.project.urlPDF)
      xhr.send()
      
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
