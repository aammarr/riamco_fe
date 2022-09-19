<template>
  <div>
    <MainHome id="main" class="section home_section" />

    <Initiative_2 :class="$vuetify.breakpoint.mobile ? 'mt-15' : ''" id="our_initiative" />

    <Initiative_challenge :class="$vuetify.breakpoint.mobile ? 'mt-15' : ''" />

    <MainInitiativeSolution :class="$vuetify.breakpoint.mobile ? 'mt-15' : ''" />

    <MainProjectLoop :class="$vuetify.breakpoint.mobile ? 'mt-15' : ''" id="project_closed_loop" />

    <MainContact :class="$vuetify.breakpoint.mobile ? 'mt-15' : ''" id="contact" />
  </div>
</template>

<script>
import Initiative_2 from "~/components/Main/Initiative_2.vue";

import Initiative_challenge from "~/components/Main/initiative_challenge.vue";
export default {
  name: "IndexPage",
  components: { Initiative_2, Initiative_challenge },
};
</script>
