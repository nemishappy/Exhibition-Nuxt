<template>
  <div>
    <!-- gets re-positioned in myInit(); -->
    <center>
    <canvas id="myCanvas"></canvas>
      <img
        src="~/assets/images/admin-region-02_fw.png"
        usemap="#imgmap_css_container_imgmap201293016112"
        class="imgmap_css_container"
        title="imgmap201293016112"
        alt="imgmap201293016112"
        id="img-imgmap201293016112"
      />

      <map name="imgmap_css_container_imgmap201293016112">
        <area
          target=""
          href=""
          @mouseover="myHover($event.currentTarget)"
          @mouseout="myLeave()"
          alt="imgmap201293016112-0"
          title="imgmap201293016112-0"
          class="imgmap201293016112-area"
          id="imgmap201293016112-area-0"
          coords="109,280,105,257,91,240,112,239,114,212,128,174,171,172,203,158,192,185,199,222,179,259,187,282,164,303,154,284,151,308"
          shape="poly"
        />
      </map>
      
    </center>
  </div>
</template>

<script>
var hdc
export default {
  mounted() {
    this.myInit()
  },
  methods: {
    byId(e) {
      return document.getElementById(e)
    },
    drawPoly(coOrdStr) {
      var mCoords = coOrdStr.split(',')
      var i, n
      n = mCoords.length

      hdc.beginPath()
      hdc.moveTo(mCoords[0], mCoords[1])
      for (i = 2; i < n; i += 2) {
        hdc.lineTo(mCoords[i], mCoords[i + 1])
      }
      hdc.lineTo(mCoords[0], mCoords[1])
      hdc.stroke()
    },
    drawRect(coOrdStr) {
      var mCoords = coOrdStr.split(',')
      var top, left, bot, right
      left = mCoords[0]
      top = mCoords[1]
      right = mCoords[2]
      bot = mCoords[3]
      hdc.strokeRect(left, top, right - left, bot - top)
    },
    myHover(element) {
      var hoveredElement = element
      var coordStr = element.getAttribute('coords')
      var areaType = element.getAttribute('shape')

      switch (areaType) {
        case 'polygon':
        case 'poly':
          this.drawPoly(coordStr)
          break

        case 'rect':
          this.drawRect(coordStr)
      }
    },
    myLeave() {
      var canvas = this.byId('myCanvas')
      hdc.clearRect(0, 0, canvas.width, canvas.height)
    },
    myInit() {
      // get the target image
      var img = this.byId('img-imgmap201293016112')

      var x, y, w, h

      // get it's position and width+height
      x = img.offsetLeft
      y = img.offsetTop
      w = img.clientWidth
      h = img.clientHeight

      // move the canvas, so it's contained by the same parent as the image
      var imgParent = img.parentNode
      var can = this.byId('myCanvas')
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
      hdc.fillStyle = 'red'
      hdc.strokeStyle = 'red'
      hdc.lineWidth = 2
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
