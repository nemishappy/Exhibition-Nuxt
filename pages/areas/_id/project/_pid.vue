<template>
  <div v-if="projectLoaded" class="box">
    <v-container>
      <div class="mini-spacer-30">
        <!-- -----------------------------------------------
            Start Project Title
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2>{{ project.title }}</h2>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Project Title
        ----------------------------------------------- -->
      </div>
      <Dialog @stClick="downloadPDF" @ndClick="hideDialog" />
      <!-- -----------------------------------------------
            Start Project Content
      ----------------------------------------------- -->
      <div class="row">
        <div class="column justify-center align-center">
          <!-- -----------------------------------------------
            Left column
          ----------------------------------------------- -->
          <div v-if="project.urlVideo">
            <video-player :src="project.urlVideo" />
          </div>
          <div v-else>
            <!-- -----------------------------------------------
              img element can be multiple image here
            ----------------------------------------------- -->
            <img :src="project.urlImg" alt="" />
          </div>
        </div>
        <div class="column justify-center">
          <!-- -----------------------------------------------
            Right column
          ----------------------------------------------- -->
          <div class="d-flex flex-column">
            <v-responsive class="content overflow-y-auto" max-height="400px">
              <p>{{ project.content }}</p>
            </v-responsive>
            <ul>
              <v-btn
                v-if="project.downloadUrlVideo"
                class="action no-uppercase"
                text
                outlined
                color="primary"
                :href="project.downloadUrlVideo"
              >
                <v-icon left> mdi-youtube </v-icon>
                ดาวน์โหลดคลิปวิดีโอ
              </v-btn>
              <v-btn
                class="action no-uppercase"
                text
                outlined
                color="primary"
                @click.prevent="openDialog"
              >
                <v-icon left> mdi-file-document </v-icon>
                ดาวน์โหลดเอกสาร
              </v-btn>
            </ul>
            <div class="my-2">ยอดเข้าชมโครงการนี้: {{ project.viewCount }}</div>
          </div>
        </div>
      </div>
      <!-- -----------------------------------------------
            End Project Content
      ----------------------------------------------- -->
    </v-container>
  </div>
  <div v-else><Overlay /></div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'
import Dialog from '~/components/Dialog'
import Overlay from '~/components/Overlay'

require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer,
    Dialog,
    Overlay,
  },
  data() {
    return {
      routeID: '',
    }
  },
  computed: {
    projectLoaded() {
      return this.$store.getters.getProjectLoaded
    },
    project() {
      return this.$store.getters.getProject
    },
  },
  async created() {
    // on created we fetch data needed
    this.routeID = this.$route.params.pid.toString()
    this.$store.dispatch('startOverlay')
    await this.$store.dispatch('loadProject', {
      id: this.$route.params.id,
      pid: this.routeID,
    })
    this.addViewCount()
  },
  methods: {
    async addViewCount() {
      const increment = this.$fireModule.firestore.FieldValue.increment(1)
      const dataBase = await this.$fire.firestore
        .collection(`area${this.$route.params.id}`)
        .doc(this.routeID)
      dataBase.update({
        viewCount: increment,
      })
    },
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
      var httpsReference = this.$fire.storage.refFromURL(this.project.urlPDF)
      await httpsReference
        .getDownloadURL()
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          console.log(url, this.project.title)
          // This can be downloaded directly:
          const fileName = this.project.title
          var xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          xhr.onload = function () {
            const blob = xhr.response
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = fileName
            link.click()
            URL.revokeObjectURL(link.href)
          }
          xhr.open('GET', url)
          xhr.send()
          // window.open(url)
        })
        .catch((error) => {
          // Handle any errors
          console.log(error)
        })
      this.hideDialog()
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
      @media (max-width: 600px) {
        max-width: 320px;
      }
    }
    .img {
      width: 533.33px;
      height: auto;
      @media (max-width: 600px) {
        max-width: 400px;
      }
    }
    ul {
      @media (max-width: 600px) {
        padding-left: 0px;
        display: flex;
        flex-direction: column;
      }
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
