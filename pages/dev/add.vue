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
          files: files,
        })
        // await this.uploadImg()
        // if (this.pdfFile) {
        //   await this.uploadPDF()
        // }
        // await this.createData()
        Promise.all(
          // Array of "Promises"
          files.map((file) => this.uploadFile(file))
        )
          .then((url) => {
            console.log(`All success`)
            console.log(this.urlImg);
            console.log(this.urlPDF);
          })
          .catch((error) => {
            console.log(`Some failed: `, error.message)
          })
        this.$nuxt.$loading.finish()
        this.$refs.form.reset()
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
      await fileRef.put(file).on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot)
        },
        (err) => {
          console.log(err)
        },
        async () => {
          if (file.type == 'application/pdf') {
            this.urlPDF = await fileRef.getDownloadURL()
          } else {
            this.urlImg = await fileRef.getDownloadURL()
          }
          console.log('One success:', file.name)
        }
      )
    },
    async uploadImg() {
      // upload image to storage
      const storageRef = this.$fire.storage.ref()
      const imgRef = storageRef.child(
        `areas/${this.areaID}/coverImg/${this.coverImgFile.name}`
      )
      await imgRef.put(this.coverImgFile).on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot)
        },
        (err) => {
          console.log(err)
        },
        async () => {
          this.urlImg = await imgRef.getDownloadURL()
        }
      )
    },
    async uploadPDF() {
      const storageRef = this.$fire.storage.ref()
      const pdfRef = storageRef.child(
        `areas/${this.areaID}/doc/${this.pdfFile.name}`
      )
      await pdfRef.put(this.pdfFile).on(
        'state_achanged',
        (snapshot) => {
          console.log(snapshot)
        },
        (err) => {
          console.log(err)
        },
        async () => {
          this.urlPDF = await pdfRef.getDownloadURL()
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
    },
  },
}
</script>
