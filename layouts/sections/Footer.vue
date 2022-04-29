<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-lg-15 text-center" justify="center">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-lg-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo1.png?alt=media&token=5d2a517b-e855-4ac7-ab40-f6504c2fd2f4"
            class="img-resize rounded"
            alt="feature2"
          />
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo2.png?alt=media&token=26582101-0421-4a31-92ac-b40276d2fc91"
            class="img-resize rounded"
            alt="feature2"
          />
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/exhibition-thaihealth.appspot.com/o/logo3.png?alt=media&token=80ba7874-6b17-496c-9920-4c880729f03f"
            class="img-resize rounded"
            alt="feature2"
          />
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
