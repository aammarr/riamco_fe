<template>
  <div>
    <MainHome />

    <!-- <MainInitiative_2 id="our_initiative" /> -->

    <Initiative_2 id="our_initiative" />

    <MainProjectLoop id="project_closed_loop" />

    <MainContact id="contact" />
  </div>
</template>

<script>
import Initiative_2 from "~/components/Main/Initiative_2.vue";
export default {
  name: "IndexPage",
  components: { Initiative_2 },
};
</script>
