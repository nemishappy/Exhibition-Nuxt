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
        v-model="marker.isActive"
        content-class="my-menu"
        transition="slide-x-transition"
        bottom
        offset-x
        :close-on-content-click="false"
        v-for="(marker, index) in markers"
        :key="index"
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <div
                class="pin"
                :ref="'pin' + marker.markerID"
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon color="red">mdi-map-marker</v-icon>
              </div>
            </template>
            <span>{{ marker.title }}<br />คลิกเพื่ออ่านเพิ่มเติม</span>
          </v-tooltip>
        </template>

        <v-card max-width="400" class="mx-auto">
          <v-list>
            <v-list-item>
              <img src="~assets/images/cover-demo.png" width="200px" alt="" />

              <v-list-item-content class="pa-4">
                <v-list-item-title>{{ marker.title }}</v-list-item-title>
                <v-list-item-subtitle class="text-wrap">{{
                  marker.subtitle
                }}</v-list-item-subtitle>
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
      markers: [
        {
          markerID: '1',
          title: 'จังหวัด...',
          subtitle:
            'เนื้อหาโดยย่ออออออออออออออย่ออออออออออออออ เนื้อหาโดยย่ออออออออออออออย่ออออออออออออออ เนื้อหาโดยย่ออออออออออออออย่ออออออออออออออ',
          x: 450,
          y: 120,
          isActive: false,
        },
        {
          markerID: '2',
          title: 'จังหวัด...2',
          subtitle: 'เนื้อหาโดยย่ออออออออออออออย่ออออออออออออออ ',
          x: 300,
          y: 120,
          isActive: false,
        },
      ],
    }
  },
  created() {
    this.routeID = this.$route.params.id
  },
  mounted() {
    this.$nextTick(() => {
      this.initPin()
    })
  },
  methods: {
    async initPin() {
      this.markers.forEach((element) => {
        var $ref = this.$refs[`pin${element.markerID}`][0]
        $ref.style.left = element.x + 'px'
        $ref.style.top = element.y + 'px'
      })
      // console.log(this.$refs)
    },
    toEvent(index) {
      this.markers[index].isActive = false
      this.$router.push({
        name: 'areas-id-project-pid',
        params: { id: this.routeID, pid: this.markers[index].markerID},
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
