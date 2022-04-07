<template>
  <div>
    <!-- gets re-positioned in myInit(); -->
    <canvas id="myCanvas" ref="myCanvas"></canvas>
    <center>
      <img
        src="~/assets/images/Thailand_Map.png"
        usemap="#imgmap_css_container_imgmap201293016112"
        class="imgmap_css_container"
        alt="imgmap201293016112"
        id="img-imgmap201293016112"
        ref="img-imgmap201293016112"
        width="701"
        height="1280"
        @load="myInit"
      />

      <map name="imgmap_css_container_imgmap201293016112">
        <area
          v-for="(area, index) in areas"
          :key="index"
          target=""
          :href="area.path"
          @mouseover="drawArea(index)"
          @mouseout="myLeave()"
          alt="imgmap201293016112-0"
          :title="area.title"
          :coords="area.coords"
          shape="poly"
        />
      </map>
    </center>
  </div>
</template>

<script>
var hdc
var clipImage
var img
var imgArray = new Array()
export default {
  data() {
    return {
      areas: [
        {
          areaId: 1,
          title: 'ภาค 1',
          path: '1',
          coords:
            '260,617,253,601,255,591,249,580,247,559,254,564,273,564,299,550,306,551,302,556,303,577,302,586,305,589,297,598,307,607,298,616',
          x: 245,
          y: 548,
        },
        {
          areaId: 2,
          title: 'ภาค 2',
          path: '2',
          coords:
            '244,504,242,524,249,546,246,557,254,564,273,563,298,550,306,549,314,538,324,542,329,533,325,509,334,508,348,499,345,484,320,495,314,508,289,505,275,516',
          x: 240,
          y: 480,
        },
        {
          areaId: 3,
          title: 'ภาค 3',
          path: '3',
          coords:
            '150,416,141,481,165,489,168,480,177,486,195,488,225,494,239,492,244,503,264,510,275,516,288,503,314,507,320,494,343,483,340,417,331,456,309,459,293,436,259,481,246,459,205,428,183,437',
          x: 135,
          y: 411,
        },
        {
          areaId: 4,
          title: 'ภาค 4',
          path: '4',
          coords:
            '182,321,162,350,142,356,151,415,183,437,205,426,234,449,246,456,259,481,281,449,295,435,310,458,331,454,342,402,340,370,356,339,372,339,375,331,363,308,342,296,308,313,282,370,271,347,240,353',
          x: 130,
          y: 292,
        },
        {
          areaId: 5,
          title: 'ภาค 5',
          path: '5',
          coords:
            '35,242,51,237,88,288,104,284,101,241,114,240,114,271,135,270,174,292,185,245,219,244,251,224,290,216,318,187,323,214,299,261,302,279,319,290,282,369,271,346,241,352,181,320,161,350,141,356,150,408,141,472,104,429,102,394',
          x: 30,
          y: 185,
        },
        {
          areaId: 6,
          title: 'ภาค 6',
          path: '6',
          coords:
            '180,7,198,12,210,13,222,0,255,6,273,26,280,81,306,74,336,85,339,130,319,185,286,216,247,224,221,241,183,244,176,291,136,268,134,255,157,235,144,201,171,177,176,133,168,118,167,76,177,52,190,28',
          x: 130,
          y: 0,
        },
        {
          areaId: 7,
          title: 'ภาค 7',
          path: '7',
          coords:
            '141,203,155,235,134,255,133,267,115,270,115,238,100,239,104,281,88,287,52,235,33,240,3,169,29,138,59,61,128,60,150,31,184,28,166,77,166,116,175,134,169,176',
          x: 0,
          y: 32,
        },
        {
          areaId: 8,
          title: 'ภาค 8',
          path: '8',
          coords:
            '300,260,303,279,319,291,315,309,342,295,362,307,376,331,389,324,399,319,423,326,443,330,454,304,466,322,487,319,499,314,514,326,525,302,558,329,569,326,584,320,596,308,598,272,569,275,566,241,579,219,559,189,503,180,396,202',
          x: 290,
          y: 180,
        },
        {
          areaId: 9,
          title: 'ภาค 9',
          path: '9',
          coords:
            '374,340,376,332,399,320,443,330,454,305,465,322,489,320,500,315,514,327,526,304,558,329,570,328,583,358,591,369,573,389,565,416,578,426,562,450,552,443,510,451,487,443,473,417,467,429,445,423,430,424,422,411,419,393,433,365,400,355,390,342',
          x: 370,
          y: 300,
        },
        {
          areaId: 10,
          title: 'ภาค 10',
          path: '10',
          coords:
            '580,220,567,242,569,274,598,272,596,308,585,320,570,327,592,369,574,388,566,416,578,426,563,451,570,455,554,500,567,514,568,543,661,554,694,524,701,427,627,269',
          x: 555,
          y: 220,
        },
        {
          areaId: 11,
          title: 'ภาค 11',
          path: '11',
          coords:
            '326,510,329,532,346,539,351,533,362,535,371,543,387,544,405,563,472,559,567,543,567,515,553,499,570,455,550,445,509,451,487,444,472,417,467,430,444,423,429,425,421,412,417,393,432,365,400,356,389,343,372,341,357,341,340,371,344,403,341,419,345,482,349,499,336,507',
          x: 316,
          y: 332,
        },
        {
          areaId: 12,
          title: 'ภาค 12',
          path: '12',
          coords:
            '299,618,308,607,299,599,306,590,303,586,304,579,303,557,315,540,324,544,330,531,333,530,346,539,351,533,362,535,370,544,387,544,405,563,432,561,473,559,424,635,412,638,396,639,391,632,370,644,358,629,340,618,325,607,309,621',
          x: 295,
          y: 528,
        },
        {
          areaId: 13,
          title: 'ภาค 13',
          path: '13',
          coords:
            '307,622,327,611,357,632,370,646,391,634,396,640,423,636,439,660,460,710,470,768,294,689',
          x: 277,
          y: 608,
        },
        {
          areaId: 14,
          title: 'ภาค 14',
          path: '14',
          coords:
            '70,465,104,431,141,474,140,482,165,491,168,482,177,488,226,496,238,494,243,504,241,525,245,532,249,545,245,556,248,582,254,591,252,600,259,618,233,624,228,615,232,603,218,579,207,588,155,598,94,526,78,505',
          x: 70,
          y: 425,
        },
        {
          areaId: 15,
          title: 'ภาค 15',
          path: '15',
          coords:
            '219,579,232,602,228,615,233,624,234,657,228,729,185,827,155,828,151,644,155,600',
          x: 145,
          y: 572,
        },
        {
          areaId: 16,
          title: 'ภาค 16',
          path: '16',
          coords:
            '153,826,134,846,134,911,112,932,121,947,112,968,103,970,97,1000,97,1008,110,1015,104,1026,134,1027,139,1044,165,1056,175,1071,177,1085,187,1089,207,1081,210,1092,232,1095,262,1084,239,932,186,906,185,828',
          x: 95,
          y: 822,
        },
        {
          areaId: 17,
          title: 'ภาค 17',
          path: '17',
          coords:
            '133,846,134,910,112,931,121,946,113,968,103,969,97,999,97,1007,110,1015,104,1026,134,1027,139,1044,165,1056,174,1071,176,1087,187,1089,206,1083,222,1141,223,1151,204,1155,85,1097,70,972,123,853',
          x: 75,
          y: 835,
        },
        {
          areaId: 18,
          title: 'ภาค 18',
          path: '18',
          coords:
            '210,1093,232,1095,254,1088,309,1177,355,1176,398,1227,387,1255,371,1271,349,1258,320,1279,306,1263,236,1213,191,1159,224,1151',
          x: 147,
          y: 1075,
        },
      ],
    }
  },
  mounted() {
    for (let index = 0; index < 18; index++) {
      imgArray[index] = new Image()
      imgArray[index].src = require('~/assets/images/areas/' +
        (index + 1) +
        '.png')
    }
  },
  computed: {
    // areas() {
    //   return this.$store.getters.getAreas
    // },
  },
  methods: {
    byRefs(e) {
      return this.$refs[e]
    },
    async drawArea(index) {
      // clipImage = new Image()
      // clipImage.src = require('~/assets/images/areas/' + (index + 1) + '.png')

      // draw the image which will be clipped except in the clipping path
      console.log(this.areas[index])
      hdc.drawImage(imgArray[index], this.areas[index].x, this.areas[index].y)
      img.style.opacity = 0.3

      // restore the unclipped context (==undo the clipping path)
      hdc.restore()
    },
    myLeave() {
      var canvas = this.byRefs('myCanvas')
      hdc.clearRect(0, 0, canvas.width, canvas.height)
      img.style.opacity = 1.0
    },
    myInit() {
      // get the target image
      img = this.byRefs('img-imgmap201293016112')

      var x, y, w, h

      // get it's position and width+height

      x = img.offsetLeft
      y = img.offsetTop
      w = img.clientWidth + 10
      h = img.clientHeight + 10
      // move the canvas, so it's contained by the same parent as the image
      var imgParent = img.parentNode
      var can = this.byRefs('myCanvas')
      imgParent.appendChild(can)

      // place the canvas in front of the image
      can.style.zIndex = 1

      // position it over the image
      can.style.left = x + 'px'
      can.style.top = y + 'px'

      // make same size as the image
      can.setAttribute('width', w + 'px')
      can.setAttribute('height', h + 'px')

      // get it's context
      hdc = can.getContext('2d')

      // set the 'default' values for the colour/width of fill/stroke operations
      hdc.lineWidth = 1
      hdc.shadowColor = 'black'
      hdc.shadowBlur = 6
      hdc.shadowOffsetX = 6
      hdc.shadowOffsetY = 6
      this.loadClipImage()
    },
    loadClipImage() {
      clipImage = new Image()
      clipImage.src = require('~/assets/images/areas/7.png')
    },
  },
}
</script>

<style scoped>
div {
  background-color: gray;
}
canvas {
  pointer-events: none; /* make the canvas transparent to the mouse - needed since canvas is position infront of image */
  position: absolute;
}
</style>
