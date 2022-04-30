<template>
  <div>
    <Feature1 />
    <Feature2 />
    <!-- -----------------------------------------------
    ./ Features
    ----------------------------------------------- -->

  </div>
</template>

<script>
export default {
  name: "AllCustomComponents",

  data() {
    return {};
  },
  components: {
    Feature1: () => import("@/components/features/Feature1"),
    Feature2: () => import("@/components/features/Feature2"),
  },
};
</script>
