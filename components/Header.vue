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
      
    },
  },
};
</script>

<style>
</style>