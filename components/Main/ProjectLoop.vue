<template>
  <section :class="$vuetify.breakpoint.mobile ? '' : 'full-screen'" class="project_closed_loop">
    <v-container class="
        project__section
        t-h-full
        d-flex
        align-center
        justify-center
        flex-column
      ">
      <h1 :class="$vuetify.breakpoint.mobile ? 't-text-3xl font-weight-bold' : 't-text-5xl'"
        class="my-5 t-capitalize project__section__title">
        Project Closed Loop
      </h1>
      <div class="d-flex flex-wrap ma-5 my-10 align-start"
        :class="$vuetify.breakpoint.mdAndDown ? 't-text-lg' : ' t-text-2xl justify-space-around'">
        <!-- <v-row justify="center" align="center"> -->
        <v-col align-self="start" cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
          <div class="pa-5 project__section__col_1 ">

            <h2 class="t-text-3xl text-left font-weight-bold py-5 text-wrap">
              Phase 1: Commercialization and Testing
            </h2>
            <p class="t-font-sans t-text-justify">
              The completion of Riamco’s commercial laboratory and testing
              facility. This state-of-the-art research and development facility
              and specialized team of scientists will play a major role in
              producing the enzyme utilized in our process design.
            </p>
          </div>
        </v-col>

        <v-col align-self="start" cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
          <div class="pa-5 project__section__col_2 ">

            <h2 class="t-text-3xl text-left font-weight-bold py-5">Phase 2: Operational</h2>
            <p class="t-font-sans t-text-justify">
              The completion of Riamco’s state of the art enzymatic PET Recycling
              Plant. This plant will have a recycling capacity of 100,000 tons of
              PET plastic waste per year.
            </p>
          </div>
        </v-col>
        <!-- </v-row> -->



      </div>
    </v-container>
  </section>
</template>
  
<script>
export default {
  mounted() {
    if (!this.$vuetify.breakpoint.mobile) {
      this.gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project__section",
            start: "top top",
            end: "+=400",
            markers: false,
            scrub: 2,
            pin: ".project_closed_loop",
          },
        })
        .from(".project__section__title", {
          duration: 1.0,
          opacity: 0,
          yPercent: -20,
          ease: "power2.inOut",
        })

        .from(".project__section__col_1", {
          duration: 1,
          delay: 1.5,
          opacity: 0,
          xPercent: -20,
          ease: "power4.inOut",
        })

        .from(".project__section__col_2", {
          duration: 1,
          delay: 1.5,
          opacity: 0,
          xPercent: 20,
          ease: "power4.inOut",
        });
    } else {
      this.gsap
        .timeline({
          scrollTrigger: {
            trigger: ".project__section",
            start: "-=400",
            end: "+=400",
            markers: false,
            scrub: 2,

          },
        })
        .from(".project__section__title", {
          duration: 1.0,
          opacity: 0,
          yPercent: -5,
          ease: "power2.inOut",
        })

        .from(".project__section__col_1", {
          duration: 1,
          delay: 1.5,
          opacity: 0,
          xPercent: -5,
          ease: "power4.inOut",
        })

        .from(".project__section__col_2", {
          duration: 1,
          delay: 1.5,
          opacity: 0,
          xPercent: 5,
          ease: "power4.inOut",
        });
    }
  },
};
</script>
  
<style lang="scss">
// .project_closed_loop {
//   background: rgba(0, 0, 0, 0.9);
// }

.c_h {
  height: 900px;
}
</style>