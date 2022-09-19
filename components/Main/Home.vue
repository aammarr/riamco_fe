<template>
  <v-container class="t-h-screen t-relative t-left-0">
    <ModelsChain
      v-if="!vuetify.breakpoint.theme"
      class="t-absolute t-left-0 t-right-0"
      id="enzyme_model"
    />
    <v-row class="t-h-full" justify="center" align="center">
      <v-col
        align="start"
        align-self="start"
        class="t-h-full d-flex flex-column justify-center align-start"
        cols="12"
      >
        <div class="jumboltron">
          <LogoBlue class="mx-auto" />

          <UtilsTitle :text="'Mission Statement'" />

          <h2 class="t-text-2xl my-5 t-font-mono">
            Creating a Closed Loop Economy for Plastics
          </h2>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Chain from "../Models/Chain.vue";

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    //this.gsap.set(".jumboltron", { scale: 0.8 });
    this.gsap.timeline().from(".jumboltron", {
      duration: 1.5,
      delay: 0.3,
      opacity: 0,
      y: 160,
      stagger: 0.1,
      // scale: 0.8,
      ease: "back",
    });
    // .from("#enzyme_model", { xPercent: 100, duration: 0.2 });
  },
  components: { Chain },
};
</script>

<style >
#wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
}

#c {
  width: 100%;
  height: 100%;
}
</style>