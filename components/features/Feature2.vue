<template>
  <div>
    <div class="feature3-component">
      <v-container class="position-relative">
        <v-row justify="center">
          <v-col cols="12" md="1" lg="7" class="text-center">
            <v-chip small color="error" text-color="white"> Hilight </v-chip>
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                ประวัติและที่มาของโครงการ
              </h2>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            Start Feature 3 Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col class="text-center">
            <video-player
              class="rounded"
              src="https://www.youtube.com/watch?v=LNHq7PRzJv0"
            />
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
