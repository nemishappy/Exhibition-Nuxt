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
          target=""
          href="/inspire"
          @mouseover="myHover($event.currentTarget)"
          @mouseout="myLeave()"
          alt="imgmap201293016112-0"
          title="ภาค 7"
          class="imgmap201293016112-area"
          id="imgmap201293016112-area-0"
          coords="33,241,17,197,0,169,35,172,31,137,38,100,57,64,94,70,125,61,139,66,147,33,182,29,177,61,164,75,169,97,168,118,174,134,170,173,152,160,134,177,116,183,124,213,129,242,100,237,104,283,90,288,78,264,66,257,52,234"
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
export default {
  data() {
    return {
      sector: [{}, {}],
    }
  },
  methods: {
    byRefs(e) {
      return this.$refs[e]
    },
    drawPoly(coOrdStr) {
      var mCoords = coOrdStr.split(',')
      var i, n
      n = mCoords.length

      hdc.save()
      hdc.beginPath()
      hdc.moveTo(mCoords[0], mCoords[1])
      for (i = 2; i < n; i += 2) {
        hdc.lineTo(mCoords[i], mCoords[i + 1])
      }
      hdc.lineTo(mCoords[0], mCoords[1])
      hdc.stroke()
      // make the current path a clipping path
      hdc.clip()

      // draw the image which will be clipped except in the clipping path
      hdc.drawImage(clipImage, 0, 0)
      img.style.opacity = 0.3

      // restore the unclipped context (==undo the clipping path)
      hdc.restore()
    },
    myHover(element) {
      var coordStr = element.getAttribute('coords')

      this.drawPoly(coordStr)
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

      x = img.offsetLeft - 5
      y = img.offsetTop - 5
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
      clipImage.src = require('~/assets/images/Thailand_Map.png')
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
