<template>
  <div>project {{ routeID }}</div>
</template>

<script>
export default {
  data() {
    return {
      routeID: '',
    }
  },
  created() {
    this.routeID = this.$route.params.pid
    console.log(this.routeID);
  },
}
</script>

<style lang="scss" scoped></style>
