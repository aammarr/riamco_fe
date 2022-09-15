<template>
  <div>
    <v-app-bar color="transparent" elevation="0" fixed height="100" app>
      <v-toolbar-title>
        <Logo />
      </v-toolbar-title>

      <v-spacer />

      <div class="header-menu-lg">
        <div class="glass-bg">
          <v-btn
            @click="home_animation()"
            text
            dark
            :active-class="`${
              index == 0 ? 'left-border-radius' : ''
            } active_menu_btn ${index == 3 ? 'right-border-radius' : ''}`"
            height="40"
            :to="btn.to"
            v-for="(btn, index) in buttons"
            :key="`nav-btn-${index}}`"
          >
            {{ btn.title }}
          </v-btn>
        </div>
      </div>

      <v-spacer />
      <!-- <v-btn class="mx-5 white" fab @click.stop="drawer = !drawer">
        <v-icon dark>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      buttons: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Our Initiative",
          to: "/#our_initiative",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Project Closed Loop",
          to: "/#project_closed_loop",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Contact",
          to: "/#contact",
        },
      ],

      title: "Vuetify.js",
    };
  },
  methods: {
    home_animation() {
      console.log("Route", this.$route);

      // this.gsap.ScrollTrigger.create({
      //   trigger: "#main_content",
      //   start: "center +=30%",
      //   end: "+=800",
      //   scrub: 2,
      //   pin: "#main_content",
      // });

      this.gsap.fromTo(
        `.main_content`,
        {
          opacity: 0,
          y: 300,
        },
        {
          duration: 2,
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          delay: 0.5,
        }
      );
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
        delay: 2,
        opacity: 0,
        yPercent: -10,
        ease: "power2.inOut",
      });

      this.gsap
        .timeline()
        .from(".solution__right__column #closed_system_loop", {
          delay: 4,
          opacity: 0,
          xPercent: 10,
          ease: "rough",
        });

      /** Solution Animation Ends**/

      this.gsap.timeline().from(".project__section__title", {
        // scrollTrigger: {
        //   trigger: ".project__section__title",
        //   toggleAction: "restart restart reverse reset",
        // },
        duration: 1.5,
        opacity: 0,
        yPercent: -10,
        ease: "power2.inOut",
      });

      this.gsap.timeline().from(".project__section__col_1", {
        duration: 1,
        delay: 1.5,
        opacity: 0,
        xPercent: -20,
        ease: "power4.inOut",
      });

      this.gsap.timeline().from(".project__section__col_2", {
        duration: 1,
        delay: 1.5,
        opacity: 0,
        xPercent: 20,
        ease: "power4.inOut",
      });

      this.gsap.timeline().from(".contact-card", {
        duration: 2,
        delay: 0.5,
        opacity: 0,
        yPercent: 10,
        ease: "bounce",
      });
    },
  },
};
</script>

<style>
</style>