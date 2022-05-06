<template>
  <div class="banner-wrapper banner-opacity">
    <v-container>
      <!-- -----------------------------------------------
            Start Banner
        ----------------------------------------------- -->
      <v-row justify="center">
        <v-col class="align-center">
          <div class="text-center text-md-left bannner-content">
            <h1 class="banner-title font-weight-bold white--text">
              นิทรรศการพระสร้างสุข
            </h1>
            <h6 class="banner-subtitle white--text font-weight-regular">
              &emsp;&emsp;ภายใต้โครงการพัฒนาและขับเคลื่อนนโยบายสาธารณะแบบการมีส่วนร่วมของพระสงฆ์ในระบบสุขภาพเพื่อสังคมสุขภาวะผ่านกลไกกองทุนหลักประกันสุขภาพในระดับท้องถิ่นหรือพื้นที่
            </h6>
            <h6 class="banner-subtitle white--text font-weight-regular">
              &emsp;&emsp;ตามธรรมนูญสุขภาพพระสงฆ์แห่งชาติ พ.ศ.๒๕๖๐ หมวดที่ ๓ ข้อที่ ๑๙
              กำหนดให้ องค์กรปกครองส่วนท้องถิ่นและชุมชน
              พึงสนับสนุนให้เกิดการดำเนินงานด้านการสร้างเสริมสุขภาพ
              การป้องกันโรค การควบคุมโรค และการจัดการปัจจัยคุกคามสุขภาพพระสงฆ์
              โดยใช้งบประมาณจากองค์กรปกครองส่วนท้องถิ่นและหลักประกันสุขภาพระดับท้องถิ่นหรือพื้นที่และแหล่งงบประมาณอื่นๆ
              <br/>&emsp;&emsp;<span>"มหาวิทยาลัยมหาจุฬาลงกรณราชวิทยาลัย"</span> และภาคีเครือข่าย
              ภายใต้การสนับสนุนของ
              <span>"สำนักงานกองทุนสนับสนุนการสร้างเสริมสุขภาพ(สสส.)"</span> จึงพัฒนา ผลักดัน
              ให้เกิดนโยบายสาธารณะให้พระสงฆ์ดูแลสุขภาวะองค์กรสงฆ์และชุมชนผ่านกลไกกองทุนหลักประกันสุขภาพในระดับท้องถิ่นหรือพื้นที่แบบมีส่วนร่วม
              โดยมีพื้นที่ดำเนินการร 60 พื้นที่ทั่วประเทศ
              <br/>&emsp;&emsp;มีประเด็นในการขับเคลื่อนที่น่าสนใจ
              ทั้งมิติการเสริมสร้างสุขภาวะองค์กรสงฆ์ ประชาชนในชุมชน
              รวมทั้งการรับมือกับสถานการณ์การแพร่ระบาดของเชื้อไวรัสโคโรน่า(COVID-19)
              เป็นต้น
              ผู้สนใจสามารถชมตัวอย่างพื้นที่และกิจกรรมการดำเนินงานได้ใน <span>"นิทรรศการออนไลน์พระสร้างสุข"</span>
            </h6>
            <div class="mt-8 pt-2">
              <v-btn
                color="error"
                class="btn-custom-lg linking btn-arrow mb-3"
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
.bannner-content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 25px;
  font-family: 'Sarabun', sans-serif;
}
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
  background: url('~assets/images/banner.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 20px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.banner-opacity {
  opacity:0.90;
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
    margin-right: 5px;
  }
}
</style>

