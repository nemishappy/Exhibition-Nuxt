<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar
      app
      class="app-header position-relative navbar-light header2"
      flat
      elevate-on-scroll
    >
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo />

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> หน้าหลัก </n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/table"> งานนิทรรศการ </n-link>
            </li>
                        <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/add" elevation="0"> เพิ่มข้อมูลงาน </n-link>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
export default {
  name: 'Header1',
  components: {
    Logo: () => import('@/layouts/sections/Logo'),
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleClass: function (event) {
      this.isActive = !this.isActive
    },
  },
}
</script>
