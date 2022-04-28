<template>
  <v-card class="portfolio-card overflow-hidden">
    <div class="portfolio-img">
      <v-img
        v-if="!project.urlImg"
        src="@/assets/images/portfolio/img1.jpg"
        height="200"
        content-class="img-fluid img-cover"
        alt="project"
      ></v-img>
      <v-img
        v-else
        :src="project.urlImg"
        height="200"
        content-class="img-fluid img-cover"
        alt="project"
        @click="toProject"
      ></v-img>
    </div>
    <v-card-text>
      <h5 class="font-weight-medium font-18">
        {{ project.type.name }}
      </h5>
      <p class="font-14 mb-0 text-truncate">{{ project.title }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Project',
  props: ['project'],
  data() {
    return {}
  },
  methods: {
    toProject() {
      console.log('click', this.project.areaID, this.project.projectID)
      this.$router.push({
        name: 'areas-id-project-pid',
        params: { id: this.project.areaID, pid: this.project.projectID},
      })
    },
  },
}
</script>

<style lang="scss">
.portfolio-card {
  .portfolio-img {
    overflow: hidden;
    max-height: 255px;
    .v-image__image--cover {
      transition: 0.1s ease-in;
    }
    .v-image{
      cursor: pointer;
    }

    &:hover {
      .v-image__image--cover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
