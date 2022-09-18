<template>
  <div>
    <v-app-bar
      hide-on-scroll
      color="transparent"
      elevation="0"
      fixed
      height="100"
      app
    >
      <v-btn
        v-if="$vuetify.breakpoint.mobile"
        class="mx-5 white"
        fab
        @click.stop="drawer = !drawer"
      >
        <v-icon dark>mdi-menu</v-icon>
      </v-btn>
      <v-row justify="center">
        <v-col v-if="!$vuetify.breakpoint.mobile" align="center" cols="3">
        </v-col>

        <v-col v-if="!$vuetify.breakpoint.mobile" cols="6"
          ><div class="header-menu-lg">
            <div
              class="
                glass-bg
                d-flex
                align-center
                justify-center
                no-wrap
                t-w-full
              "
            >
              <v-btn
                @click="home_animation()"
                text
                dark
                height="50"
                class="font-weight-bold"
                :active-class="`${
                  index == 0 ? 'left-border-radius' : ''
                } active_menu_btn ${index == 3 ? 'right-border-radius' : ''}`"
                :to="btn.to"
                :width="`${100 / buttons.length}%`"
                v-for="(btn, index) in buttons"
                :key="`nav-btn-${index}}`"
              >
                <span class="t-text-base">{{ btn.title }}</span>
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col align="center" :cols="$vuetify.breakpoint.mobile ? 12 : 3">
          <Logo />
        </v-col>
      </v-row>
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
          to: "/#main",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Our Initiative",
          to: "/#our_initiative",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Project Loop",
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
    home_animation() {},
  },
};
</script>
<style lang="scss">
.header-menu-lg {
  background: linear-gradient(
    45deg,
    rgba(41, 175, 141, 1) 0%,
    rgba(57, 191, 232, 1) 35%,
    rgba(82, 90, 191, 1) 81%
  );
  border-radius: 50px;
  padding: 5px 5px;
  color: white;
}

.left-border-radius {
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
}

.right-border-radius {
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}

.active_menu_btn {
  background-color: transparent !important;
}

.glass-bg {
  background: rgba(255, 255, 255, 0.11);
  border-radius: 50px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(7.4px);
}
</style>