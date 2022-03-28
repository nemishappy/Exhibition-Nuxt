<template>
  <v-app>
    <v-app-bar v-if="isStartPage" :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main v-if="isStartPage">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-main v-else>
      <Nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
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
        isStartPage = true
        return
      }
      isStartPage = false
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
