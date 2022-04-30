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
export default {
  name: 'DefaultLayout',
  components: {
    Header: () => import('@/layouts/sections/Header'),
    Footer: () => import('@/layouts/sections/Footer'),
  },
  methods: {},
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

.img-resize {
  max-height: 150px;
  max-width: 150px;
}
</style>
