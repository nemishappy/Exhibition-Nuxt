<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              นิทรรศการมหาเถรสมาคม
            </h1>
            <h4 class="banner-subtitle white--text font-weight-regular">
              รอข้อมูลเพิ่มเติม
            </h4>
            <div class="mt-16 pt-2">
              <v-btn
                color="error"
                class="mr-0 mr-md-8 mb-5 mb-md-0 btn-custom-md"
                nuxt
                to="/start"
                large
                elevation="0"
              >
                ชมนิทรรศการ
              </v-btn>
              <!-- <v-btn
                nuxt
                large
                to="/coming-soon"
                class="btn-custom-md"
                outlined
                color="white"
                elevation="0"
              >
                Upgrade to Pro
              </v-btn> -->
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img src="https://picsum.photos/id/11/500/300" alt="banner" />
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Banner
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

.banner-wrapper {
  background: #607df9;
  padding: 20px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}
</style>
