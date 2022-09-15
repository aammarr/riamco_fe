<template>
  <v-container
    class="t-h-screen d-flex flex-column align-center justify-center"
  >
    <v-card
      color="#29af8d"
      max-width="1200"
      width="100%"
      elevation="20"
      class="mx-auto contact-card rounded-lg"
    >
      <v-card-text class="pa-5">
        <v-row>
          <v-col>
            <div>
              <h1 class="t-text-6xl font-weight-bold white--text">
                Contact Us.
              </h1>

              <p class="t-text-3xl my-5">
                Fill up the form and our team will get back to you.
              </p>
            </div>

            <div class="form_action_btns">
              <div class="t-w-40 d-flex align-center">
                <v-icon>mdi-phone</v-icon>

                <span>+123 456 789</span>
              </div>

              <div class="t-w-40 d-flex align-center">
                <v-icon>mdi-mail</v-icon>

                <span>abc@mail.com</span>
              </div>

              <div class="t-w-40 d-flex align-center">
                <v-icon>mdi-map-marker</v-icon>

                <span>New York, NY</span>
              </div>
            </div>
          </v-col>

          <v-col class="form d-flex align-center justify-end">
            <v-card elevation="5" width="400" flat class="pa-5">
              <label for="company">Company name</label>
              <v-text-field outlined dense placeholder="Riamco" />

              <label for="company">Your email address</label>
              <v-text-field outlined dense placeholder="abc@mail.com" />

              <label for="company">Phone number</label>
              <v-text-field outlined dense placeholder="+881 12345679" />

              <label for="Description">Description</label>
              <v-textarea
                auto-grow
                hide-details
                outlined
                dense
                placeholder="..."
              />
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
    this.gsap.timeline().from(".contact-card", {
      duration: 2,
      delay: 0.5,
      opacity: 0,
      yPercent: 10,
      ease: "bounce",
    });
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
  div {
    padding: 10px;
    cursor: pointer;

    span {
      margin-left: 20px;
    }
  }
}
</style>