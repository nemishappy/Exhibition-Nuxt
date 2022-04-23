<template>
    <v-card class="portfolio-card overflow-hidden">
      <div class="portfolio-img">
        <img
          src="@/assets/images/portfolio/img1.jpg"
          class="img-fluid"
          alt="portfolio"
        />
      </div>
      <v-card-text>
        <h5 class="font-weight-medium font-18">Branding for Theme Designer</h5>
        <p class="font-14 mb-0">Digital Marketing</p>
      </v-card-text>
    </v-card>
</template>
<script>
export default {
  name: 'Portfolio',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.portfolio-card {
  .portfolio-img {
    overflow: hidden;
    max-height: 255px;
    img {
      transition: 0.1s ease-in;
      cursor: pointer;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
