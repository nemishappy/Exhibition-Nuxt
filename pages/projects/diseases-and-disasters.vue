<template>
  <div>
    <div v-if="projectLoaded" class="portfolio-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Project Title
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                ประเภทโรคติดต่อและภัยพิบัติ
              </h2>
              <p>มีพื้นที่งานจัดแสดงทั้งหมด {{ projects.length }} พื้นที่</p>
              <v-text-field
                v-model="searchTerm"
                label="ค้นหาโครงการ"
                prepend-icon="mdi-magnify"
                @input="searchProjects"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Project Title
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
  data() {
    return {
      searchTerm: '',
      projects: [],
    }
  },
  computed: {
    projectLoaded() {
      return this.$store.getters.getProjectLoaded
    },
    projectsInStore() {
      return this.$store.getters.getProjects.filter(
        (project) => project.type.tid === 2
      )
    },
  },
  async created() {
    this.$store.dispatch('startOverlay')
    await this.$store.dispatch('setAllProject')
    this.projects = this.projectsInStore
  },
  methods: {
    searchProjects() {
      this.projects = this.projectsInStore.filter((project) => {
        return (
          project.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >
          -1
        )
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
