<template>
  <v-app class="background">
    <LoadingScreen v-if="loading" />

    <div v-else>
      <Particles class="t-w-full t-h-full" />

      <Header />
      <v-main id="v_main">
        <v-container fluid class="pa-0">
          <Nuxt />
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 6000);
  },
};
</script>


<style lang="scss">
.background {
  background: rgb(230, 230, 230) !important;
}
</style>
