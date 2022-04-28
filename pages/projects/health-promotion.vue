<template>
  <div>
    <div v-if="projectLoaded" class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                ประเภทสร้างเสริมสุขภาพ
              </h2>
<<<<<<< HEAD
              <p>มีพื้นที่งานจัดแสดงทั้งหมด 0 พื้นที่</p>
=======
              <p>มีพื้นที่งานจัดแสดงทั้งหมด {{ projects.length }} พื้นที่</p>
>>>>>>> a71c306 (add type)
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col
            cols="12"
            md="6"
            lg="4"
            v-for="(project, index) in projects"
            :key="index"
          >
            <Content :project="project" />
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
    <div v-else>
      <Overlay />
    </div>
  </div>
</template>

<script>
import Overlay from '~/components/Overlay'
export default {
  components: {
    Overlay,
    Content: () => import('@/components/Card'),
  },
  computed: {
    projectLoaded() {
      return this.$store.getters.getProjectLoaded
    },
    projects() {
      return this.$store.getters.getProjectsHP
    },
  },
  async created(){
    this.$store.dispatch('startOverlay')
    await this.$store.dispatch('setAllProject')
    console.log(this.projects)
  }
}
</script>

<style lang="scss" scoped></style>
