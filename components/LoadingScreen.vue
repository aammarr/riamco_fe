<template>
  <div class="loading-bg d-flex flex-column full-height justify-space-around background">
    <div class="loader-bg">
      <v-img
        alt="Riamco Logo"
        height="450"
        width="450"
        max-height="450"
        id="logo_loader"
        contain
        src="/svg/riamco-logo.svg"
        lazy-src="/svg/riamco-logo.svg"
      />
    </div>

    <div class="d-flex align-center justify-space-between font-weight-light px-15">
      <span class="loading-text">Loading...</span>
      <span>{{ loaded }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      loadingPercent: 0,
    };
  },
  watch: {
    loadingPercent(val) {
      if (val >= 100) {
        clearInterval(this.interval);
      }
    },
  },
  methods: {
    doProgress() {
      let step = 40;
      this.interval = setInterval(() => {
        this.loadingPercent++;
      }, step);
    },
  },
  computed: {
    loaded() {
      return this.loadingPercent + "%";
    },
    percentage() {
      let percent = 0;
      if (percent != 100) {
        setTimeout(() => {
          percent += 1;
        }, 0);
      }
      return percent + "%";
    },
  },

  mounted() {

    this.doProgress()

    this.gsap.fromTo(
      "#logo_loader",
      {
        opacity: 0,
        y: 200,
        rotation: 0,
      },
      {
        duration: 5,
        y: 0,
        opacity: 1,
        rotation: 720,
        ease: "power3.inOut",
        delay: 0.1,
      }
    );

    this.gsap.from(".loading-text", {
      duration: 5,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.inOut",
    });
  },
};
</script>

<style lang="scss">
.loader-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.loading-bg {
  background-color: #ffff;
  height: 100%;
}



</style>