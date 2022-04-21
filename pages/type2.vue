<template>
  <div>
    <Content />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
    };
  },

  data() {
    return {};
  },
  components: {
    Content: () =>
      import("@/components/custom/type/type2"),
  },
};
</script>
