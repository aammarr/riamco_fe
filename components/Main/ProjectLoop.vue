<template>
  <section style="" class="full-screen project_closed_loop">
    <v-container
      class="
        project__section
        t-h-full
        d-flex
        align-center
        justify-center
        flex-column
      "
    >
      <h1 class="t-text-5xl my-5 t-capitalize project__section__title">
        Project Closed Loop
      </h1>
      <div class="d-flex ma-5 my-10 align-start justify-space-around">
        <div class="pa-5 t-max-w-lg project__section__col_1">
          <h1 class="font-weight-bold">Phase 1</h1>
          <h2 class="t-text-3xl text-left py-5">
            Commercialization and Testing
          </h2>
          <p class="t-font-sans t-text-xl">
            The completion of Riamco’s commercial laboratory and testing
            facility. This state-of-the-art research and development facility
            and specialized team of scientists will play a major role in
            producing the enzyme utilized in our process design.
          </p>
        </div>

        <div class="pa-5 t-max-w-lg project__section__col_2">
          <h1 class="font-weight-bold">Phase 2</h1>
          <h2 class="t-text-3xl text-left py-5">Operational</h2>
          <p class="t-font-sans t-text-xl">
            The completion of Riamco’s state of the art enzymatic PET Recycling
            Plant. This plant will have a recycling capacity of 100,000 tons of
            PET plastic waste per year.
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>
  
  <script>
export default {
  mounted() {
    this.gsap
      .timeline({
        scrollTrigger: {
          trigger: ".project_closed_loop",
          // start: "top top",
          // end: "bottom bottom",
          markers: false,
          scrub: true,
          pin: true,
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
  },
};
</script>
  
<style lang="scss">
// .project_closed_loop {
//   background: rgba(0, 0, 0, 0.9);
// }
</style>