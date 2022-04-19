<template>
  <div class="box">
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
          <v-btn class="action no-uppercase" text color="primary"
            >download PDF</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from 'nuxt-video-player'

require('nuxt-video-player/src/assets/css/main.css')
export default {
  components: {
    VideoPlayer,
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
      (project) => project.areaID === 1 && project.projectID == this.routeID
    )
    this.project = store[0]
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
