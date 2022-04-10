<template>
  <v-app>
    <v-app-bar v-if="!isStartPage" fixed app>
      <img
        class="mr-3"
        src="~/assets/images/logo.png"
        height="40"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main v-if="!isStartPage">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-main v-else>
      <Nuxt />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  created() {
    this.checkRoute()
  },
  data() {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'นิทรรศการมหาเถรสมาคม',
      isStartPage: false,
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    },
  },
  methods: {
    checkRoute() {
      if (this.$route.name == 'index') {
        this.isStartPage = true
        return
      }
      this.isStartPage = false
    },
  },
}
</script>

<style lang="scss">
.v-application {
  font-family: 'Prompt', sans-serif;
}
.text-title {
  font-size: 20px;
  font-weight: bold;
}
.no-uppercase {
  text-transform: unset !important;
}
</style>
