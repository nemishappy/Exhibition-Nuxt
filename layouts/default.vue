<template>
  <v-app>
    <v-app-bar v-if="!isStartPage" fixed app>
      <img class="mr-3 start" @click="toHome" src="~/assets/images/logo.png" height="40" />
      <v-toolbar-title class="start" v-text="title"  @click="toHome"/>
      <v-spacer />
      <div>name</div>
      <v-btn v-show="$route.name == 'start' ? false : true" icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main v-if="!isStartPage">
      <v-container>
        <v-card class="pa-4" elevation="10" tile >
          <Nuxt />
        </v-card>
      </v-container>
    </v-main>
    <v-main v-else>
      <Nuxt />
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ (สสส.)</span>
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
  font-family: 'Prompt', sans-serif;
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
}
.start {
  cursor: pointer;
}
</style>
