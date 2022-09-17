<template>
  <div>
    <MainHome id="main" class="section home_section" />

    <!-- <MainInitiative_2 id="our_initiative" /> -->

    <Initiative_2 class="section" id="our_initiative" />

    <Initiative_challenge />

    <MainInitiativeSolution />

    <MainProjectLoop class="section" id="project_closed_loop" />

    <MainContact class="section" id="contact" />
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
