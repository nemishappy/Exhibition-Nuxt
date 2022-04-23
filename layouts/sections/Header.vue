<template>
  <div>
    <v-app-bar class="app-header" app flat elevate-on-scroll height="85">
      <v-container class="py-0 d-flex align-center fill-height">
        <img
          class="mr-3 start"
          @click="toHome"
          src="~/assets/images/logo.png"
          height="40"
        />
        <v-toolbar-title class="start" v-text="title" @click="toHome" />
        <v-spacer />
        <div class="options">
          <div class="option">
            <NuxtLink to="/start"> <p>หน้าหลัก</p> </NuxtLink>
          </div>
          <div class="option">
            <NuxtLink to="/projects"> <p>งานนิทรรศการ</p> </NuxtLink>
          </div>
          <div class="option">
            <NuxtLink to="/add">
              <p>เพิ่มข้อมูลงาน</p>
            </NuxtLink>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'นิทรรศการมหาเถรสมาคม',
      isActive: false,
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  &.v-sheet {
    background-color: #fff !important;
    height: 80px !important;
    .v-toolbar__content {
      height: 85px !important;
    }
  }
}
.v-toolbar__content {
  //   height: 85px !important;
  align-items: baseline !important;
}
.options {
  display: flex;
  padding: 15px 0px;
  .option {
    display: flex;
    align-items: center;
    padding: 12px;
    a {
      text-decoration: none;
      color: rgb(20, 20, 20);
      &:hover {
        color: $primary !important;
      }
    }
    .icon {
      width: 18px;
      height: auto;
    }
    p {
      font-size: 18px;
      margin: 0;
    }
  }
}
</style>
