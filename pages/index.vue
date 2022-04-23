<template>
  <div>
    <Banner />
    <Feature/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {},
  components: {
    Banner: () => import('@/components/banner/Banner'),
    Feature: () => import('@/components/features/CustomComponents'),
  },
}
</script>
<style lang="scss" scoped>
.bg {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url('~/assets/images/background/startpage.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
.container {
  padding: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // v-img{
  //   justify-self: center;
  // }
}
@media (min-width: 900px) {
  .container {
    max-width: 800px;
  }
}
.v-btn__content {
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
</style>
