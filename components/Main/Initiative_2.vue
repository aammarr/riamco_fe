<template>
  <v-container class="d-flex flex-column t-h-screen align-center justify-center initiative__cont__section">
    <v-row justify="center" class="t-h-full" align="center">
      <v-col align-self="center initiative__section" class="t-h-full d-flex flex-column justify-center" cols="12" sm="8" md="6">
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
        <div class="
            init__right__column
            d-flex
            flex-column
            align-center
            justify-center
          ">
          <v-card v-for="(card, index) in initiative_cards" :key="`card-${index}`" :id="`card-${index + 1}`"
            :class="card.class" style="z-index: 1" max-width="500" elevation="10" rounded="md" class="my-2">
            <v-card-text class="pa-1">
              <div class="d-flex flex-row align-center justify-space-between">
                <div class="ma-3">
                  <div class="
                      t-rounded-xl
                      glass__simple__bg
                      d-flex
                      flex-column
                      align-center
                      justify-center
                      t-h-28 t-w-28
                    ">
                    <v-img src="/svg/riamco-logo.svg" contain height="64px" width="64px"></v-img>

                    <span class="font-weight-bold">{{ card.title }}</span>
                  </div>
                </div>

                <div>
                  <p class="
                      t-font-sans t-font-semibold t-text-sm
                      text-left
                      mb-0
                      pa-2
                    ">
                    {{ card.text }}
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
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
    this.gsap.timeline({
      scrollTrigger: {
        trigger: '.initiative__cont__section',
        start: 'top ',
        end: 'bottom ',
        markers: true,
        scrub: true,
        pin: true
      }
    })
      .from(".initiative__section", {
        duration: 1.5,
        opacity: 0,
        y: 160,
        stagger: 0.1,
        ease: "back",
      })
      .from(".init__right__column", {
        delay: 0.5,
        yPercent: 100,
        opacity: 0,
      })
      .from(".init__right__column #card-1", {
        duration: 1.5,
        delay: 0.1,
        xPercent: 20,
        stagger: 0.5,
        opacity: 0,
        ease: "power4.inOut",
      })
      .from(".init__right__column #card-2", {
        duration: 1.5,
        delay: 0.1,
        xPercent: -20,
        stagger: 0.5,
        opacity: 0,
        ease: "power4.inOut",
      })
      .from(".challenge__right__column video", {
        duration: 1.5,
        opacity: 0,
        yPercent: 100,
        ease: "power2.in",
      });


    /** Challenge Animation Starts**/

    // this.gsap.timeline().from(".challenge__right__column video", {
    //   // scrollTrigger: {
    //   //   trigger: "#challenge__section__row h1",
    //   //   // start: "center",
    //   //   // end: "center",
    //   //   toggleAction: "restart pause reverse reset",
    //   //   markers: false,
    //   // },
    //   duration: 1.5,
    //   opacity: 0,
    //   yPercent: 100,
    //   ease: "power2.in",
    // });

    // this.gsap.timeline().from("#challenge__section", {
    //   duration: 1,
    //   delay: 1.5,
    //   opacity: 0,
    //   xPercent: 100,
    //   stagger: 0.1,
    //   ease: "power2.inOut",
    // });

    /** Challenge Animation Ends**/
  },
  // mounted() {
  //   /** Initiave Animation **/
  //   // Left column animation
  //   this.gsap.timeline().from("#initiative__section", {
  //     duration: 1.5,
  //     delay: 0.3,
  //     opacity: 0,
  //     y: 160,
  //     stagger: 0.1,
  //     ease: "back",
  //   });

  //   //   Right Column Animation
  //   this.gsap
  //     .timeline({ yoyo: true })
  //     .from(".init__right__column", {
  //       delay: 1.5,
  //       yPercent: 100,
  //       opacity: 0,
  //     })
  //     .from(".init__right__column #card-1", {
  //       xPercent: 20,
  //       stagger: 0.5,
  //       opacity: 0,
  //       ease: "power4.inOut",
  //     })
  //     .from(".init__right__column #card-2", {
  //       xPercent: -20,
  //       stagger: 0.5,
  //       opacity: 0,
  //       ease: "power4.inOut",
  //     });
  //   /** Initiave Animation Ends **/

  //   /** Challenge Animation Starts**/

  //   this.gsap.timeline().from(".challenge__right__column video", {
  //     // scrollTrigger: {
  //     //   trigger: "#challenge__section__row h1",
  //     //   // start: "center",
  //     //   // end: "center",
  //     //   toggleAction: "restart pause reverse reset",
  //     //   markers: false,
  //     // },
  //     duration: 1.5,
  //     opacity: 0,
  //     yPercent: 100,
  //     ease: "power2.in",
  //   });

  //   this.gsap.timeline().from("#challenge__section", {
  //     duration: 1,
  //     delay: 1.5,
  //     opacity: 0,
  //     xPercent: 100,
  //     stagger: 0.1,
  //     ease: "power2.inOut",
  //   });

  //   /** Challenge Animation Ends**/

  //   /** Solution Animation Starts**/

  //   this.gsap.timeline().from(".solution__content", {
  //     // scrollTrigger: ".solution",
  //     duration: 1.5,
  //     opacity: 0,
  //     yPercent: -100,
  //     ease: "power2.inOut",
  //   });

  //   this.gsap.timeline().from(".what_means_title", {
  //     duration: 1,
  //     delay: 1.5,
  //     opacity: 0,
  //     yPercent: -10,
  //     ease: "power2.inOut",
  //   });

  //   this.gsap.timeline().from(".what_means_content", {
  //     delay: 3,
  //     opacity: 0,
  //     yPercent: -10,
  //     ease: "power2.inOut",
  //   });

  //   this.gsap.timeline().from(".solution__right__column #closed_system_loop", {
  //     delay: 3,
  //     opacity: 0,
  //     xPercent: 10,
  //     ease: "rough",
  //   });

  //   /** Solution Animation Ends**/
  // },
};
</script>

<style lang="scss">
.init__right__column {
  z-index: 4;
  background: linear-gradient(45deg,
      rgba(41, 175, 141, 1) 0%,
      rgba(57, 191, 232, 1) 35%,
      rgba(82, 90, 191, 1) 81%);
  max-width: 570px;
  border-radius: 50px;
  height: 550px !important;
}

.challenge__right__column {
  video {
    border-width: 1px;
    border-style: solid;
    border-color: linear-gradient(45deg,
        rgba(41, 175, 141, 1) 0%,
        rgba(57, 191, 232, 1) 35%,
        rgba(82, 90, 191, 1) 81%) !important;
    max-width: 500px;
    margin: auto;
    border-radius: 20px !important;
  }
}
</style>