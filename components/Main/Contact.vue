<template>
  <v-container :class="$vuetify.breakpoint.mobile ? '' : 't-h-screen'" class="
      d-flex
      flex-column
      align-center
      justify-center
      contact_section
    ">
    <v-card color="primary__bg__theme" max-width="1200" width="100%" elevation="20"
      class="mx-auto contact-card rounded-lg">
      <v-card-text class="pa-5">
        <v-row>
          <v-col>
            <div>
              <h1 class="font-weight-bold white--text"
                :class="$vuetify.breakpoint.mobile ? 't-text-4xl' : 't-text-6xl'">
                Contact Us.
              </h1>

              <p class="my-5" :class="$vuetify.breakpoint.mobile ? 't-text-2xl' : 't-text-3xl'">
                Fill up the form and our team will get back to you.
              </p>
            </div>

            <div class="form_action_btns">

              <a href="mailto:info@riamco.com">
                <div class="d-flex align-center">
                  <v-icon>mdi-mail</v-icon>

                  <span>info@riamco.com</span>
                </div>
              </a>

              <div class="d-flex align-center">
                <v-icon>mdi-map-marker</v-icon>

                <span>New York, NY</span>
              </div>
            </div>
          </v-col>

          <v-col class="form d-flex align-center"
            :class="$vuetify.breakpoint.mobile ? 'justify-center' : 'justify-end'">
            <v-card elevation="5" width="400" flat class="pa-5">
              <label for="company">Company name</label>
              <v-text-field outlined dense placeholder="Riamco" />

              <label for="company">Your email address</label>
              <v-text-field outlined dense placeholder="info@riamco.com" />

              <label for="company">Phone number</label>
              <v-text-field outlined dense placeholder="+881 12345679" />

              <label for="Description">Description</label>
              <v-textarea auto-grow hide-details outlined dense placeholder="..." />
              <v-card-actions class="pr-0">
                <v-spacer></v-spacer>
                <v-btn dark depressed color="black" height="40" width="150">
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
    
<script>
export default {
  mounted() {
    if (!this.$vuetify.breakpoint.mobile) {
      this.gsap
        .timeline({
          scrollTrigger: {
            trigger: ".contact_section",
            markers: false,
            scrub: true,
            pin: ".contact_section",
          },
        })
        .from(".contact-card", {
          duration: 1,
          scrub: true,
          pin: true,
          delay: 0.5,
          opacity: 0,
          y: -200,
          ease: "bounce",
        });
    }

  },
};
</script>
    
<style lang="scss">
.form {
  label {
    color: black !important;
  }
}

.form_action_btns {

  a {
    color: black;
  }

  a:hover {
    color: rgba(0, 0, 0, 0.651);
  }

  div {
    padding: 10px;
    cursor: pointer;
    width: 200px;

    span {
      color: black;
      margin-left: 20px;
      font-size: 1rem;
    }
  }
}
</style>