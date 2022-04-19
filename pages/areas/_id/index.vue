<template>
  <div>
    <h2>ภาคการปกครองที่ {{ routeID }}</h2>
    <!-- <div v-html="pin" class="svg-icon"></div> -->

    <v-img
      contain
      :src="require(`~/assets/images/areas/1x/${routeID}.png`)"
      class="imgarea my-4"
      ref="imgarea"
      max-height="500"
    >
      <v-menu
        v-model="project.isActive"
        content-class="my-menu"
        transition="slide-x-transition"
        bottom
        offset-x
        :close-on-content-click="false"
        v-for="(project, index) in projects"
        :key="index"
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <div
                class="pin"
                :ref="'pin' + project.projectID"
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon color="red">mdi-map-marker</v-icon>
              </div>
            </template>
            <span>{{ project.title }}<br />คลิกเพื่ออ่านเพิ่มเติม</span>
          </v-tooltip>
        </template>

        <v-card max-width="400" class="mx-auto">
          <v-list>
            <v-list-item>
              <img
                v-if="!project.coverimg"
                src="~assets/images/cover-demo.png"
                width="200px"
                alt=""
              />
              <img v-else :src="project.coverimg" width="200px" alt="" />

              <v-list-item-content class="pa-4">
                <v-list-item-title>{{ project.title }}</v-list-item-title>
                <!-- <v-responsive class="overflow-y-hidden" max-height="150px">
                  <v-list-item-subtitle class="content text-wrap">
                    {{ project.content }}
                  </v-list-item-subtitle>
                </v-responsive> -->
                <v-list-item-subtitle class="content text-wrap">
                  {{ project.content }}
                </v-list-item-subtitle>
                <v-btn
                  class="no-uppercase align-self-end"
                  color="blue"
                  text
                  @click="toEvent(index)"
                  >readmore</v-btn
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-img>
  </div>
</template>

<script>
import pin from '~/assets/svg/pin.svg?raw'

export default {
  data() {
    return {
      routeID: '',
      pin,
      isLoaded: false,
      projects: [],
    }
  },
  created() {
    this.routeID = this.$route.params.id
    var projectOnDB = JSON.parse(
      JSON.stringify(this.$store.getters.getProjects)
    )
    projectOnDB.forEach((data) => {
      var obj = data
      obj['isActive'] = false
      this.projects.push(obj)
    })
    // this.projects =
  },
  mounted() {
    this.$nextTick(() => {
      this.initPin()
    })
  },
  methods: {
    async initPin() {
      this.projects.forEach((element) => {
        var $ref = this.$refs[`pin${element.projectID}`][0]
        $ref.style.left = element.x + 'px'
        $ref.style.top = element.y + 'px'
      })
      // console.log(this.$refs)
    },
    toEvent(index) {
      // this.projects[index].isActive = false
      this.$router.push({
        name: 'areas-id-project-pid',
        params: { id: this.routeID, pid: this.projects[index].projectID },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 24px;
  height: auto;
  color: red;
}
.my-menu {
  margin-left: 10px;
  contain: initial;
  overflow: visible;
}
.pin {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: rgb(255, 255, 255, 0.6);
  border-radius: 50%;
}
.pin:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: puls-effect 1.5s ease infinite;
}
.content {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
@keyframes puls-effect {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
