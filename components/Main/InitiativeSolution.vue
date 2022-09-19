<template>
  <v-container class="
      d-flex
      flex-column
      t-h-full
      align-center
      justify-center
      solution__cont__section
    ">
    <v-row justify="center" align="center" class="t-h-screen">
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" align-self="center">
        <div id="solution__section__left">
          <div class="solution__content">
            <UtilsTitle :text="'The Solution'" />
            <p class="t-font-sans t-text-2xl t-text-justify py-5">
              Riamco introduces the UAE’s first Full Circular Closed Loop
              Recycling System for PET Plastics.
            </p>
          </div>

          <div class="py-5 what_means">
            <h2 class="t-text-4xl font-weight-bold primary--text what_means_title">
              What This Means?
            </h2>
            <p class="t-font-sans t-text-2xl t-text-justify py-5 what_means_content">
              A circular economy is restorative and regenerative by design. This
              means materials constantly flow around a 'closed loop' system,
              rather than being used once and then discarded. In the case of
              plastic, this means simultaneously keeping the value of plastics
              in the economy, without leakage into the natural environment.
            </p>
          </div>
        </div>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" align-self="center" align="center">
        <div id="solution__section__right">
          <v-img alt="closed_system_loop" id="closed_system_loop"
            :max-width="$vuetify.breakpoint.mobile ? 350 : '700px'" src="img/cycle.png" lazy-src="img/cycle.png">
          </v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    renderAnimation() {
      if (!this.$vuetify.breakpoint.mobile) {
        this.gsap
          .timeline({
            scrollTrigger: {
              trigger: ".solution__cont__section",
              // start: "top top",
              // end: "bottom bottom",
              markers: false,
              scrub: true,
              pin: true,
            },
          })
          .from("#solution__section__left", {
            scrollTrigger: ".solution__cont__section",
            duration: 1.5,
            opacity: 0,
            yPercent: -100,
            ease: "power2.inOut",
          })
          .from(".what_means_title", {
            duration: 1,
            delay: 1,
            opacity: 0,
            xPercent: -10,
            ease: "power2.inOut",
          })
          .from(".what_means_content", {
            // delay: 3,
            opacity: 0,
            xPercent: -10,
            ease: "power2.inOut",
          })
          .from(
            "#solution__section__right #closed_system_loop",
            // {
            //   opacity: 0,
            //   rotation: 0,
            // },
            {
              // duration: 2,

              opacity: 0,
              // rotation: 720,
              ease: "power3.inOut",
              // delay: 0.1,
            }
          );
      }
    },
  },
  mounted() {
    this.renderAnimation;
  },
};
</script>

<style lang="scss">

</style>