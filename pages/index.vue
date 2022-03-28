<template>
  <div class="bg">
    <v-container>
      <h1>นิทรรศการออนไลน์</h1>
      <v-img
        class="d-flex align-self-center my-4"
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="337.50"
        max-width="600"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
      <v-btn
        class="d-flex align-self-center no-uppercase "
        color="primary"
        elevation="2"
        large
        rounded
        to="/start"
      >Start</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {},
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
.v-btn__content{
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
</style>
