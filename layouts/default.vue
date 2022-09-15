<template>
  <v-app class="background">
    <LoadingScreen v-if="loading" />

    <div v-else>
      <!-- <Particles /> -->

      <Header />
      <v-main id="v_main">
        <v-container fluid class="pa-0">
          <Nuxt />
        </v-container>
      </v-main>
      <!-- <v-footer color="transparent" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer> -->
    </div>

    <!-- <ModelsChain /> -->
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
