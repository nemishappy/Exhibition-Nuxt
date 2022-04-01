<template>
  <section>
    <div class="container">
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        alt=""
      />
      <div class="all-tooltip">
        <div class="tooltip tooltip-1">
          <div class="pin">
            <ion-icon name="add-circle"></ion-icon>
          </div>
          <div class="tooltip-content">
            <div class="arrow"></div>
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
                alt=""
              />
            </div>
            <div class="content">
              <h1>This is a title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                natus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                natus.
              </p>
              <button>Buy Now $199</button>
            </div>
          </div>
        </div>
        <div class="tooltip tooltip-2">
          <div class="pin"></div>
          <div class="tooltip-content">
            <div class="arrow"></div>
            <div class="img">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <div class="content">
              <h1>This is a title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                natus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                natus.
              </p>
              <button>Buy Now $199</button>
            </div>
          </div>
        </div>
        <div class="tooltip tooltip-3">
          <div class="pin"></div>
          <div class="tooltip-content">
            <div class="arrow"></div>
            <div class="content">
              <h2>Hello world -3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus molestiae accusantium magni ex numquam eveniet,
                doloremque dolores impedit beatae quas!
              </p>
            </div>
          </div>
        </div>
        <div class="tooltip tooltip-4">
          <div class="pin"></div>
          <div class="tooltip-content">
            <div class="arrow"></div>
            <div class="content">
              <h2>Hello world -4</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus molestiae accusantium magni ex numquam eveniet,
                doloremque dolores impedit beatae quas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InspirePage',
  mounted() {
    const tooltips = document.querySelectorAll('.all-tooltip .tooltip')
    const fullDiv = document.querySelector('section')
    const container = document.querySelector('.container')
    let timeoutId
    window.addEventListener('resize', contentPosition)
    window.addEventListener('DOMContentLoaded', contentPosition)

    function contentPosition() {
      tooltips.forEach((tooltip) => {
        const pin = tooltip.querySelector('.pin')
        const content = tooltip.querySelector('.tooltip-content')
        const arrow = tooltip.querySelector('.arrow')
        const pinLeft = pin.offsetLeft
        if (pinLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
          const extraLeft =
            fullDiv.offsetWidth - (pinLeft + content.offsetWidth / 2)
          // console.log('right-conflict', tooltip)
          content.style.left =
            pinLeft - content.offsetWidth / 2 + extraLeft - 30 + 'px'
          content.style.top = pin.offsetTop + 30 + 'px'
        } else if (
          pin.offsetLeft + container.offsetLeft <
          content.offsetWidth / 2
        ) {
          // console.log('left conflict', pin.offsetLeft)
          content.style.left = -container.offsetLeft + 'px'
          content.style.top = pin.offsetTop + 30 + 'px'
        } else {
          content.style.left = pinLeft - content.offsetWidth / 2 + 'px'
          content.style.top = pin.offsetTop + 30 + 'px'
        }
        arrow.style.left =
          pinLeft - content.offsetLeft + pin.offsetWidth / 2 + 'px'
      })
    }
    tooltips.forEach((tooltip) => {
      const pin = tooltip.querySelector('.pin')
      const content = tooltip.querySelector('.tooltip-content')
      pin.addEventListener('mouseover', () => {
        tooltip.classList.add('active')
      })
      pin.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          if (!tooltip.classList.contains('content-hover')) {
            tooltip.classList.remove('active')
          }
        }, 2000)
      })
      content.addEventListener('mouseover', () => {
        clearTimeout(timeoutId)
        tooltip.classList.add('active')
        tooltip.classList.add('content-hover')
      })
      content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          tooltip.classList.remove('active')
          tooltip.classList.remove('content-hover')
        }, 2000)
      })
    })

    
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  font-family: 'Montserrat';
}
body {
  background-color: azure;
  width: 100%;
}

section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.container img {
  height: 100%;
  width: 100%;
}
.all-tooltip {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.tooltip-content {
  position: absolute;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px #00000020;
  padding: 30px;
  border-radius: 8px;
  width: 90vw;
  max-width: 300px;
  opacity: 0;
  pointer-events: none;
  /* left: -50%; */
  z-index: 2;
}
.tooltip-content .arrow {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 10px solid transparent;
  border-bottom-color: rgb(255, 255, 255);
  top: 0px;
  left: 50%;
  transform: translate(-50%, -100%) rotate(0deg);
}
.pin {
  position: absolute;
  content: '';
  top: 50%;
  left: 80%;
  height: 25px;
  width: 25px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
}
.pin:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  animation: puls-effect 1s ease infinite;
}
.tooltip.active .tooltip-content {
  opacity: 1;
  pointer-events: all;
  display: block;
}

/* Custom Style for tooltip-1 */

.tooltip-1 .pin {
  top: 40%;
  left: 82%;
  height: 15px;
  width: 15px;
  background-color: rgb(255, 255, 255);
}
.tooltip-1 .tooltip-content {
  display: flex;
  max-width: 500px;
  align-items: stretch;
  justify-content: center;
  padding: 0;
  background-color: aliceblue;
}
.tooltip-1.active .tooltip-content {
  display: flex;
}
.tooltip-1 .tooltip-content .img {
  width: 50%;
  object-fit: cover;
}
.tooltip-1 .tooltip-content .content {
  width: 50%;
  padding: 20px;
}
.tooltip-1 .tooltip-content .content h1 {
  font-size: 24px;
}
.tooltip-1 .tooltip-content .content p {
  font-size: 14px;
}
.tooltip-1 .tooltip-content .content button {
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px #00000020;
}

/* custom style for tooltip-2 */

.tooltip-2 .pin {
  top: 80%;
  left: 35%;
  height: 15px;
  width: 15px;
}
.tooltip-2 .tooltip-content .content h1 {
  margin: 20px 0;
}
.tooltip-2 .tooltip-content {
  background-color: aliceblue;
}
.tooltip-2 .tooltip-content button {
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 20px #00000020;
}

/* Custom style for tooltip-3 */

.tooltip-3 .pin {
  top: 20%;
  left: 5%;
  height: 15px;
  width: 15px;
}
/* Custom style for tooltip-4 */

.tooltip-4 .pin {
  top: 80%;
  left: 5%;
  height: 15px;
  width: 15px;
}

/* Puls Effect For Pins */

@keyframes puls-effect {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Media Query */

@media (max-width: 768px) {
  .tooltip-1 .tooltip-content {
    flex-direction: column;
    max-width: 300px;
  }
  .tooltip-1 .tooltip-content .content,
  .tooltip-1 .tooltip-content .img {
    width: 100%;
  }
}


</style>
