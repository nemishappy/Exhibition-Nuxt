<template>
  <v-app>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import Header from '~/layouts/sections/Header'
export default {
  name: 'DefaultLayout',
  components: {
    Header: () => import('@/layouts/sections/Header'),
    Footer: () => import('@/layouts/sections/Footer'),
  },
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
    back() {
      this.$router.go(-1)
    },
    toHome() {
      this.$router.push({ name: 'start' })
    },
  },
}
</script>

<style lang="scss">
.v-application {
  font-family: 'Prompt', sans-serif !important;
}
.text-title {
  font-size: 20px;
  font-weight: bold;
}
.no-uppercase {
  text-transform: unset !important;
}
.container {
  padding: 0 12px !important;
  height: 100%;
}
.start {
  cursor: pointer;
}

.mini-spacer {
  padding: 75px 0;
}

.mini-spacer-50 {
  padding: 50px 0;
}

.mini-spacer-30 {
  padding: 50px 0;
}
</style>
