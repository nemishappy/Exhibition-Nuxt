<template>
  <div>
    <div class="feature3-component mini-spacer">
      <v-container class="position-relative">
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row>
          <v-col cols="12" lg="10">
            <!-- <v-img
              :src="require('@/assets/images/features/3/feature-img.jpg')"
              alt="feature"
              class="rounded"
            /> -->
            <video-player
              class="rounded"
              src="https://www.youtube.com/watch?v=LNHq7PRzJv0"
            />
          </v-col>
          <v-col cols="12" md="7" lg="5" class="feature3-card">
            <v-card class="card-shadow">
              <v-card-text>
                <div class="pa-10 text-center">
                  <v-chip small color="error" text-color="white">
                    Hilight
                  </v-chip>
                  <h3 class="feature3-title font-weight-medium">
                    ประวัติและที่มาของโครงการ
                  </h3>
                  <p>หน่วยงานที่สนับสนุนโครงการมีดังนี้</p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Feature 3 Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')
export default {
  name: 'Feature3',
  component: { VideoPlayer },
  data() {
    return {}
  },
  methods: {},
}
</script>
