<template>
  <div>
    <Blog />
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
    Blog: () =>
      import("@/components/custom/portfolio/Portfolio"),
  },
};
</script>
