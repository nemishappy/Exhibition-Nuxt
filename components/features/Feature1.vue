<template>
  <div>
    <div class="feature2-component mini-spacer bg-extra-light">
      <v-container>
        <!-- -----------------------------------------------
            Start Feature 2 Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="10" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                Awesome with Extra Ordinary Flexibility
              </h2>
              <p>
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 2 Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Feature 2
        ----------------------------------------------- -->
        <v-row justify="center" class="feature2-spacer">
          <v-col cols="12" lg="6" class="mb-15">
            <v-card elevation="0">
              <v-row>
                <v-col cols="12" md="8" class="py-0">
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-row>
                        <v-col cols="12" md="4">
                          <img
                            src="@/assets/images/features/2/img1.jpg"
                            class="img-fluid rounded"
                            alt="feature2"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="8"
                          class="px-md-0 d-flex align-center"
                        >
                          <h4 class="font-weight-medium font-18">
                            สร้างเสริมสุขภาพ
                          </h4>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" class="py-0">
                  <v-btn
                    block
                    depressed
                    nuxt
                    to="/projects/health-promotion"
                    color="info"
                    class="linking feature2-action-btn"
                  >
                    ดูเพิ่มเติม <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6" class="mb-15">
            <v-card elevation="0">
              <v-row>
                <v-col cols="12" md="8" class="py-0">
                  <v-card-text>
                    <div class="d-flex align-center">
                      <v-row>
                        <v-col cols="12" md="4">
                          <img
                            src="@/assets/images/features/2/img2.jpg"
                            class="img-fluid rounded"
                            alt="feature2"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="8"
                          class="px-md-0 d-flex align-center"
                        >
                          <h4 class="font-weight-medium font-18">
                            โรคติดต่อและภัยพิบัติ
                          </h4>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" class="py-0">
                  <v-btn
                    block
                    depressed
                    color="info"
                    class="linking feature2-action-btn"
                    nuxt
                    to="/projects/diseases-and-disasters"
                  >
                    ดูเพิ่มเติม <i class="mdi mdi-arrow-right"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 2
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Feature2',
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
//
// Feature 1
//
.feature1-component {
  .icon-round {
    font-size: 45px;
    width: 80px;
    color: $accent;
    line-height: 80px;
    text-align: center;
    display: inline-block;
    margin: 20px 0 30px;
    border-radius: 100%;
  }
}

.linking {
  i {
    margin-left: 10px;
    transition: 0.2s ease-in;
    font-size: 16px;
  }
  &:hover {
    i {
      margin-left: 15px;
    }
  }
}

.section-title {
  font-size: 30px;
  margin: 20px 0 15px;
  line-height: 36px;
}

@media (max-width: 767px) {
  .section-title {
    font-size: 23px;
  }
}

//
// Feature 2
//
.feature2-action-btn {
  border-radius: 0 0.25rem 0.25rem 0;
  height: 100% !important;
}

@media (max-width: 767px) {
  .feature2-action-btn {
    border-radius: 0 0 0.25rem 0.25rem;
    height: 50px !important;
  }
}

.feature2-spacer {
  margin-top: 60px !important;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

//
// Feature 3
//

.feature3-component {
  position: relative;
}

.feature3-card {
  position: absolute;
  top: 17%;
  right: 0;
  .feature3-title {
    font-size: 24px;
    line-height: 30px;
    margin: 20px 0 15px;
  }
}

.position-relative {
  position: relative !important;
}

.card-shadow {
  box-shadow: 0 0 30px rgb(115 128 157 / 10%) !important;
}


@media (min-width: 768px) and (max-width: 991px) {
  .feature3-card {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
  }
}

@media (max-width: 767px) {
  .feature3-card {
    position: relative;
  }
}
</style>
