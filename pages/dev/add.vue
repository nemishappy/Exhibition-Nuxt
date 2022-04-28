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
      <v-text-field
        v-model.number="areaID"
        label="AreaID"
        required
      ></v-text-field>
      <v-text-field
        v-model.number="projectID"
        label="ProjectID"
        required
      ></v-text-field>
      <v-text-field v-model="title" label="title" required></v-text-field>
      <v-text-field v-model="content" label="content" required></v-text-field>
      <v-select
          v-model="type"
          :hint="`${type.name}, ${type.tid}`"
          :items="itemsType"
          item-text="name"
          item-value="tid"
          label="Select Type"
          persistent-hint
          return-object
          single-line
        ></v-select>
      <v-file-input
        v-model="coverImgFile"
        label="coverimage"
        accept="image/png, image/jpeg, image/bmp"
        show-size
        truncate-length="20"
        required
      ></v-file-input>
      <v-text-field v-model="urlVideo" label="urlVideo" required></v-text-field>
      <v-text-field
        v-model="downloadUrlVideo"
        label="DownloadurlVideo"
        required
      ></v-text-field>
      <v-file-input
        v-model="pdfFile"
        label="PDF"
        accept=".pdf"
        show-size
        truncate-length="20"
        required
      ></v-file-input>
      <v-text-field v-model.number="x" label="X" required></v-text-field>
      <v-text-field v-model.number="y" label="Y" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Confirm
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      itemsType: [
        { name: 'สร้างเสริมสุขภาพ', tid: 1 },
        { name: 'โรคติดต่อและภัยพิบัต', tid: 2 },
      ],
      namework: '',
      id: '',
      areaID: '',
      projectID: '',
      title: '',
      content: '',
      type: {name: '', tid: 0},
      coverImgFile: null,
      urlImg: '',
      urlVideo: '',
      downloadUrlVideo: '',
      pdfFile: null,
      urlPDF: '',
      x: '',
      y: '',
    }
  },
  methods: {
    async validate() {
      this.$refs.form.validate()
      if (this.pdfFile && this.coverImgFile) {
        this.$nuxt.$loading.start()
        console.log({
          areaID: this.areaID,
          projectID: this.projectID,
          title: this.title,
          content: this.content,
          type: this.type,
          urlImg: this.urlImg,
          urlVideo: this.urlVideo,
          downloadUrlVideo: this.downloadUrlVideo,
          urlPDF: this.urlPDF,
          x: this.x,
          y: this.y,
          viewCount: 0,
        })
        this.startUploadImg()

        return
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    async startUploadImg() {
      const storageRef = this.$fire.storage.ref()
      const imgRef = storageRef.child(
        `areas/${this.areaID}/coverImg/${this.coverImgFile.name}`
      )
      imgRef.put(this.coverImgFile).on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot)
        },
        (err) => {
          console.log(err)
        },
        async () => {
          this.urlImg = await imgRef.getDownloadURL()
          this.uploadPDF()
        }
      )
    },
    async uploadPDF() {
      const storageRef = this.$fire.storage.ref()
      const pdfRef = storageRef.child(
        `areas/${this.areaID}/doc/${this.pdfFile.name}`
      )
      pdfRef.put(this.pdfFile).on(
        'state_achanged',
        (snapshot) => {
          console.log(snapshot)
        },
        (err) => {
          console.log(err)
        },
        async () => {
          this.urlPDF = await pdfRef.getDownloadURL()
          this.createData()
        }
      )
    },

    async createData() {
      const dataBase = await this.$fire.firestore
        .collection(`area${this.areaID}`)
        .doc(this.projectID.toString())
      await dataBase.set({
        areaID: this.areaID,
        projectID: this.projectID,
        title: this.title,
        content: this.content,
        type: this.type,
        urlImg: this.urlImg,
        urlVideo: this.urlVideo,
        downloadUrlVideo: this.downloadUrlVideo,
        urlPDF: this.urlPDF,
        x: this.x,
        y: this.y,
        viewCount: 0,
      })
      console.log('done.')
      this.$nuxt.$loading.finish()
      this.$refs.form.reset()
    },
  },
}
</script>
