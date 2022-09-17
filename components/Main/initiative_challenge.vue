<template>
  <v-container
    class="
      d-flex
      flex-column
      t-h-screen
      align-center
      justify-center
      challenge__cont__section
    "
  >
    <v-row justify="center" align="center" class="t-h-full challenge__section">
      <v-col align-self="center">
        <div id="challenge__section__left">
          <UtilsTitle :text="'The Challenge'" />
          <p class="t-font-sans t-text-lg text-left py-5">
            What to do with billions of tones of plastic waste piling up in
            landfills and polluting our natural lands and water?
          </p>
          <p>
            Currently, there is no end solution available to discard enormous
            volumes of plastics without causing a negative environmental impact.
          </p>
          <p>
            Plastics are generally disposed of by means of landfills or
            incinerators which have been a significant contributing factor to
            global warming.
          </p>
        </div>
      </v-col>

      <v-col align-self="center">
        <div id="challenge__section__right">
          <video autoplay muted loop>
            <source src="videos/site_overview.mp4" type="video/mp4" />
          </video>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.gsap
      .timeline({
        scrollTrigger: {
          trigger: ".challenge__cont__section",
          markers: true,
          scrub: true,
          pin: true,
        },
      })
      .from("#challenge__section__right video", {
        duration: 1,
        opacity: 0,
        yPercent: 100,
        ease: "power2.in",
      })
      .from("#challenge__section__left", {
        duration: 1,
        opacity: 0,
        xPercent: 100,
        stagger: 0.1,
        ease: "power2.inOut",
      });
  },
};
</script>

<style lang="scss">
#challenge__section__right {
  video {
    max-width: 900px;
    margin: auto;
    border-radius: 20px !important;
  }
}
</style>