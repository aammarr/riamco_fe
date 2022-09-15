<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-row justify="center" class="t-h-screen" align="center">
      <v-col
        align-self="center"
        class="t-h-full d-flex flex-column justify-center"
        cols="12"
        sm="8"
        md="6"
      >
        <div id="initiative__section">
          <h1 class="display-2 font-weight-light primary--text">
            Our Initiative
          </h1>
          <p class="t-font-sans black--text t-text-lg text-left py-5">
            {{ content }}
          </p>
          <v-btn fab color="primary" large>
            <v-icon> mdi-lightbulb-on </v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col align-self="center" align="center" cols="12" sm="8" md="6">
        <div
          class="
            init__right__column
            d-flex
            flex-column
            align-center
            justify-center
          "
        >
          <v-card
            v-for="(card, index) in initiative_cards"
            :key="`card-${index}`"
            :id="`card-${index + 1}`"
            :class="card.class"
            style="z-index: 1"
            max-width="500"
            elevation="10"
            rounded="md"
            class="my-2"
          >
            <v-card-text class="pa-1">
              <div class="d-flex flex-row align-center justify-space-between">
                <div class="ma-3">
                  <div
                    class="
                      t-rounded-xl
                      glass__simple__bg
                      d-flex
                      flex-column
                      align-center
                      justify-center
                      t-h-28 t-w-28
                    "
                  >
                    <v-img
                      src="/svg/riamco-logo.svg"
                      contain
                      height="64px"
                      width="64px"
                    ></v-img>

                    <span class="font-weight-bold">{{ card.title }}</span>
                  </div>
                </div>

                <div>
                  <p
                    class="
                      t-font-sans t-font-semibold t-text-sm
                      text-left
                      mb-0
                      pa-2
                    "
                  >
                    {{ card.text }}
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="center"
      class="t-h-screen challenge__section__row"
    >
      <v-col align-self="center">
        <div id="challenge__section">
          <h1 class="display-1 font-weight-light primary--text">
            The Challenge
          </h1>
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
        <div class="challenge__right__column">
          <video autoplay muted loop>
            <source src="videos/site_overview.mp4" type="video/mp4" />
          </video>
        </div>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      align="center"
      class="t-h-screen solution__section__row"
    >
      <v-col align-self="center">
        <div class="solution">
          <div class="solution__content">
            <h1 class="display-1 font-weight-light primary--text">
              The Solution
            </h1>
            <p class="t-font-sans t-text-lg text-left py-5">
              Riamco introduces the UAE’s first Full Circular Closed Loop
              Recycling System for PET Plastics.
            </p>
          </div>

          <div class="py-5 what_means">
            <h2 class="font-weight-bold primary--text what_means_title">
              What This Means?
            </h2>
            <p class="t-font-sans t-text-lg text-left py-5 what_means_content">
              A circular economy is restorative and regenerative by design. This
              means materials constantly flow around a 'closed loop' system,
              rather than being used once and then discarded. In the case of
              plastic, this means simultaneously keeping the value of plastics
              in the economy, without leakage into the natural environment.
            </p>
          </div>
        </div>
      </v-col>

      <v-col align-self="center">
        <div class="solution__right__column">
          <v-img
            alt="closed_system_loop"
            id="closed_system_loop"
            height="500"
            contain
            src="img/closed_system_loop.png"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      content: `A Clear Vision, Leading Global Sustainability, and fighting Climate
            Change globally. Set to launch in the United Arab Emirates (UAE),
            Riamco, the UAE’s first enzymatic PET Plastic recycling plant,
            utilizes an innovative recycling process. Providing a full circular
            economy for PET Plastics, this process offers endless possibilities
            across industries to leverage its state-of-the-art technology and
            process design.`,
      initiative_cards: [
        {
          title: "Vision",
          class: "t-left-12",
          text: "Riamco seeks to establish a full circular approach to how we use and dispose of plastics by creating a closed loop system, from recycled PET to new PET products and eliminating plastic waste.",
        },
        {
          title: "Mission",
          class: "t-relative t-right-12",
          text: "To Achieve net zero plastic leakage into our ecosystems and a more sustainable future for the UAE and the world.",
        },
      ],
    };
  },
  mounted() {
    /** Initiave Animation **/
    // Left column animation
    this.gsap.timeline().from("#initiative__section", {
      duration: 1.5,
      delay: 0.3,
      opacity: 0,
      y: 160,
      stagger: 0.1,
      ease: "back",
    });

    //   Right Column Animation
    this.gsap
      .timeline({ yoyo: true })
      .from(".init__right__column", {
        delay: 1.5,
        yPercent: 100,
        opacity: 0,
      })
      .from(".init__right__column #card-1", {
        xPercent: 20,
        stagger: 0.5,
        opacity: 0,
        ease: "power4.inOut",
      })
      .from(".init__right__column #card-2", {
        xPercent: -20,
        stagger: 0.5,
        opacity: 0,
        ease: "power4.inOut",
      });
    /** Initiave Animation Ends **/

    /** Challenge Animation Starts**/

    this.gsap.timeline().from(".challenge__right__column video", {
      // scrollTrigger: {
      //   trigger: "#challenge__section__row h1",
      //   // start: "center",
      //   // end: "center",
      //   toggleAction: "restart pause reverse reset",
      //   markers: false,
      // },
      duration: 1.5,
      opacity: 0,
      yPercent: 100,
      ease: "power2.in",
    });

    this.gsap.timeline().from("#challenge__section", {
      duration: 1,
      delay: 1.5,
      opacity: 0,
      xPercent: 100,
      stagger: 0.1,
      ease: "power2.inOut",
    });

    /** Challenge Animation Ends**/

    /** Solution Animation Starts**/

    this.gsap.timeline().from(".solution__content", {
      // scrollTrigger: ".solution",
      duration: 1.5,
      opacity: 0,
      yPercent: -100,
      ease: "power2.inOut",
    });

    this.gsap.timeline().from(".what_means_title", {
      duration: 1,
      delay: 1.5,
      opacity: 0,
      yPercent: -10,
      ease: "power2.inOut",
    });

    this.gsap.timeline().from(".what_means_content", {
      delay: 3,
      opacity: 0,
      yPercent: -10,
      ease: "power2.inOut",
    });

    this.gsap.timeline().from(".solution__right__column #closed_system_loop", {
      delay: 3,
      opacity: 0,
      xPercent: 10,
      ease: "rough",
    });

    /** Solution Animation Ends**/
  },
};
</script>

<style lang="scss">
.init__right__column {
  z-index: 4;
  background: linear-gradient(
    45deg,
    rgba(41, 175, 141, 1) 0%,
    rgba(57, 191, 232, 1) 35%,
    rgba(82, 90, 191, 1) 81%
  );
  max-width: 570px;
  border-radius: 50px;
  height: 550px !important;
}

.challenge__right__column {
  video {
    border-width: 1px;
    border-style: solid;
    border-color: linear-gradient(
      45deg,
      rgba(41, 175, 141, 1) 0%,
      rgba(57, 191, 232, 1) 35%,
      rgba(82, 90, 191, 1) 81%
    ) !important;
    max-width: 500px;
    margin: auto;
    border-radius: 20px !important;
  }
}
</style>