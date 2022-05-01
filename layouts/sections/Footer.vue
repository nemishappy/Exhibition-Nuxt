<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-12">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-lg-0">
          <div>
            <h4 class="font-weight-regular font-18">สนับสนุนโดย</h4>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo1.png?alt=media&token=5d2a517b-e855-4ac7-ab40-f6504c2fd2f4"
              class="img-resize rounded"
              height="48"
              alt="feature2"
            />
          </div>
          <div class="mt-2">
            <h4 class="font-weight-regular font-18">ดำเนินการโดย</h4>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo2.png?alt=media&token=26582101-0421-4a31-92ac-b40276d2fc91"
              class="img-resize rounded ml-md-2 mt-1"
              height="48"
              alt="feature2"
            />
          </div>
          <div class="mt-2">
            <h4 class="font-weight-regular font-18">ร่วมกับ</h4>
            <div class="d-flex ml-md-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo3.png?alt=media&token=80ba7874-6b17-496c-9920-4c880729f03f"
                class="img-resize rounded"
                height="46"
                alt="feature2"
              />
            </div>
          </div>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Address</h4>
          <p class="mt-10">รอข้อมูลเพิ่มเติม</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Phone</h4>
          <p class="mt-10 mb-0">Reception : รอข้อมูลเพิ่มเติม</p>
          <p>Office : รอข้อมูลเพิ่มเติม</p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center">
          <p>
            All Rights Reserved by
            <a class="dark-link" href="https://phrasangsuk.com/"
              >Phrasangsuk.com</a
            >
          </p>
        </div>
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>

<script>
export default {
  name: 'Footer',
  components: {},
}
</script>
<style lang="scss" scoped>
.theme--light.v-footer {
  background: white;
}

.dark-link {
  text-decoration: none;
  color: #3e4555 !important;
  &:hover {
    color: #316ce8 !important;
  }
}
.link {
  text-decoration: none;
  &:hover {
    color: #316ce8 !important;
  }
}

.social-icons {
  a {
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    display: inline-block;
    border-radius: 100%;
    margin: 0 5px;
    transition: 0.2s ease-in;
    color: #263238;
    background: #f4f8fa;
    &:hover {
      transform: translate3d(0px, -5px, 0px);
      background: #0164d3;
      color: white;
    }
  }
}

.footer {
  padding: 45px 0;
}
</style>
