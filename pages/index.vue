<template>
  <div>
    <!-- -----------------------------------------------
    ./ Banner seciotn
    ----------------------------------------------- -->
    <Banner />
    <!-- -----------------------------------------------
    ./ Custom feature seciotn
    ----------------------------------------------- -->
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
