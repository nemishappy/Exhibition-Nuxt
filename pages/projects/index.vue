<template>
  <div>
    <div v-if="projectLoaded" class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Project Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                งานนิทรรศการทั้งหมด
              </h2>
              <p>มีพื้นที่งานจัดแสดงทั้งหมด {{ projects.length }} พื้นที่</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Project Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Project
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <!-- loop all projects -->
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
            End Project
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
      return this.$store.getters.getProjects
    },
  },
  async created() {
    this.$store.dispatch('startOverlay')
    await this.$store.dispatch('setAllProject')
  },
}
</script>

<style lang="scss" scoped></style>
