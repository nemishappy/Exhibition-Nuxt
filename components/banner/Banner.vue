<template>
  <div class="banner-wrapper">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col class="d-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold white--text">
              นิทรรศการพระสร้างสุข
            </h1>
            <h6 class="banner-subtitle white--text font-weight-regular">
              ในประเทศไทยมีประชาชนผู้นับถือศาสนาพุทธเป็นส่วนมากทำให้วัดวาอารามนั้นถือได้ว่าเป็นสถาบันหลักและเป็นที่พึ่งพาทางจิตใจมาอย่างช้านาน
และเนื่องด้วยวัดที่เป็นสถาบันหลักของชุมชนมีการพัฒนาและขับเคลื่อนนโยบายสาธารณะแบบมีส่วนร่วมของพระสงฆ์ในระบบสุขภาพเพื่อสังคมสุขภาวะในระดับท้องถิ่นหรือพื้นที่ ซึ่งมีกิจกรรม "สุขภาพอนามัย" ในการที่จะสร้างสุขภาพอนามัยแก่พระสงฆ์และประชาชนทั่วไปนั้นจึงจัดได้ว่าเป็นกิจกรรมที่สำคัญอย่างยิ่งจึงเป็นที่มาของ เว็บไซต์นิทรรศการพระสร้างสุข ซึ่งจะจัดแสดงโครงงานที่เกี่ยวข้องกับการสร้างเสริมสุขภาพอนามัย ของแต่ละพื้นที่ภายใต้ 18 ภาคการปกครองคณะสงฆ์
            </h6>
            <div class="mt-8 pt-2">
                  <v-btn
                    color="error"
                    class="btn-custom-lg linking btn-arrow "
                    nuxt
                    x-large
                    to="/start"
                    elevation="0"
                  >
                    <span calss="btn-subtitle">ชมนิทรรศการ</span>
                    <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
            </div>
          </div>
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
  font-size: 20px;
}

.btn-subtitle {
  font-size: 30px;
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
