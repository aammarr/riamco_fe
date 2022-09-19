<template>
  <div>
    <v-img class="Riamco-logo" height="300px" width="300px" contain alt="Riamco Logo"
      src="/svg/riamco-logo-color.svg" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.gsap.timeline().from("#riamco_logo", {
      duration: 1,
      delay: 0.3,
      rotate: 45,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }
};
</script>

<style>

</style>