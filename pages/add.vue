<template>
  <v-container>
    <div class="mini-spacer-30">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2>เพิ่มข้อมูลงาน</h2>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="areaID" label="AreaID" required></v-text-field>
      <v-text-field
        v-model="projectID"
        label="ProjectID"
        required
      ></v-text-field>
      <v-text-field v-model="title" label="title" required></v-text-field>
      <v-text-field v-model="content" label="content" required></v-text-field>
      <v-text-field v-model="coverimg" label="coverimg" required></v-text-field>
      <v-text-field v-model="urlVideo" label="urlVideo" required></v-text-field>
      <v-text-field
        v-model="Downloadurlvideo"
        label="DownloadurlVideo"
        required
      ></v-text-field>
      <v-text-field v-model="urlPDF" label="urlPDF" required></v-text-field>
      <v-text-field v-model="x" label="X" required></v-text-field>
      <v-text-field v-model="y" label="Y" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Confirm
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    namework: '',
    id: '',
    areaID: '',
    projectID: '',
    title: '',
    content: '',
    coverimg: '',
    urlVideo: '',
    Downloadurlvideo: '',
    urlPDF: '',
    x: '',
    y: '',
  }),
  methods: {
    async validate() {
      this.$refs.form.validate()
      await this.$fire.firestore.collection('areas').add({
        areaID: this.areaID,
        projectID: this.projectID,
        title: this.title,
        content: this.content,
        coverimg: this.coverimg,
        urlVideo: this.urlVideo,
        Downloadurlvideo: this.Downloadurlvideo,
        urlPDF: this.urlPDF,
        x: this.x,
        y: this.y,
      })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
