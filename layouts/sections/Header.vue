<template>
  <div>
    <v-app-bar class="app-header" app flat clipped-left height="85">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleMobileNav"
      ></v-app-bar-nav-icon>
      <v-container class="py-0 d-flex align-center fill-height">
        <img
          class="mr-3 start"
          @click="toHome"
          src="~/assets/images/logo.jpg"
          height="40"
        />
        <v-toolbar-title class="start" v-text="title" @click="toHome" />
        <v-spacer />
        <v-btn class="hidden-md-and-up" @click="back" icon
          ><v-icon>mdi-arrow-left</v-icon></v-btn
        >
        <div class="options hidden-sm-and-down">
          <div class="option">
            <NuxtLink to="/"> <p>หน้าหลัก</p> </NuxtLink>
          </div>
          <div class="option">
            <NuxtLink to="/projects"> <p>งานนิทรรศการ</p> </NuxtLink>
          </div>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <div class="option-mobile">
                <NuxtLink to="/"> <p>หน้าหลัก</p> </NuxtLink>
              </div>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><div class="option-mobile">
                <NuxtLink to="/projects"> <p>งานนิทรรศการ</p> </NuxtLink>
              </div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div class="option-mobile">
                <NuxtLink to="/projects/health-promotion">
                  <p>โครงการสร้างเสริมสุขภาพ</p>
                </NuxtLink>
              </div></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><div class="option-mobile">
                <NuxtLink to="/projects/diseases-and-disasters">
                  <p>โครงการเกี่ยวกับโรคติดต่อและภัยพิบัติ</p>
                </NuxtLink>
              </div></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'นิทรรศการพระสร้างสุข',
      isActive: false,
      drawer: false,
      group: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    toggleMobileNav() {
      this.drawer = !this.drawer
    },
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
.v-toolbar__title {
  font-size: 14px;
  @media (min-width: 800px) {
    font-size: 1.25rem;
  }
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
        color: #316ce8 !important;
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
.option-mobile {
  display: flex;
  align-items: center;
  padding: 12px;
  a {
    text-decoration: none;
    color: rgb(20, 20, 20);
  }
  .icon {
    width: 18px;
    height: auto;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
}
</style>
