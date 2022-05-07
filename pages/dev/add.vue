<template>
  <v-container v-if="user.uid">
    <div class="mini-spacer-30">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
          <div class="text-center">
            <h2>เพิ่มข้อมูลงาน</h2>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- -----------------------------------------------
    ./ Start Form
    ----------------------------------------------- -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model.number="areaID"
        label="AreaID"
        required
        :rules="numberRules"
      ></v-text-field>
      <v-text-field
        v-model.number="projectID"
        label="ProjectID"
        required
        :rules="numberRules"
      ></v-text-field>
      <v-text-field v-model="title" label="title" required></v-text-field>
      <v-text-field v-model="content" label="content" required></v-text-field>
      <v-select
        v-model="type"
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
    <!-- -----------------------------------------------
    ./ End Form
    ----------------------------------------------- -->
  </v-container>
  <div v-else></div>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      numberRules: [
        (v) => v || 'This field may not be empty',
        (v) => Number.isInteger(v) || 'The value must be an integer number',
        (v) => v > 0 || 'The value must be greater than zero',
      ],
      itemsType: [
        { name: 'ไม่มีหมวดหมู่', tid: 0 },
        { name: 'สร้างเสริมสุขภาพ', tid: 1 },
        { name: 'โรคติดต่อและภัยพิบัติ', tid: 2 },
      ],
      namework: '',
      id: '',
      areaID: '',
      projectID: '',
      title: '',
      content: '',
      type: { name: 'ไม่มีหมวดหมู่', tid: 0 },
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
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
  mounted() {
    if (!this.user.uid) {
      this.$router.push({ name: 'index' })
    }
  },
  destroyed() {
    // uncommant "this.logout()" for more security
    // this.logout()
  },
  methods: {
    async validate() {
      this.$refs.form.validate()
      // validate all field
      if (this.coverImgFile) {
        this.$nuxt.$loading.start()
        const files = []
        files.push(this.coverImgFile)
        if (this.pdfFile) {
          files.push(this.pdfFile)
        }
        console.log({
          areaID: this.areaID,
          projectID: { id: this.projectID, type: typeof this.projectID },
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
          files: files,
        })
        const promises = files.map((file) => this.uploadFile(file))
        Promise.all(promises)
          .then((uploadedMediaList) => {
            this.urlImg = uploadedMediaList[0]
            this.urlPDF = uploadedMediaList[1]
            console.log(uploadedMediaList, `All success`)
            this.createData()
            this.$nuxt.$loading.finish()
          })
          .catch((error) => {
            console.log(`Some failed: `, error.message)
            this.$nuxt.$loading.finish()
            this.$refs.form.reset()
          })

        return
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    logout() {
      this.$fire.auth.signOut()
      this.$store.dispatch('setUid', {
        uid: '',
      })
    },
    async uploadFile(file) {
      // upload file to storage
      const storageRef = this.$fire.storage.ref()
      var type
      if (file.type == 'application/pdf') {
        type = 'doc'
      } else {
        type = 'coverImg'
      }
      const fileRef = storageRef.child(
        `areas/${this.areaID}/${type}/${file.name}`
      )
      return fileRef.put(file).then(() => fileRef.getDownloadURL())
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
      this.$refs.form.reset()
    },
  },
}
</script>
