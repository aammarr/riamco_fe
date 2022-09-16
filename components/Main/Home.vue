<template>
  <v-container class="t-h-screen" >
    <v-row class="t-h-full" justify="center" align="center">
      <v-col
        align-self="center"
        class="t-h-full d-flex flex-column justify-center align-center"
        cols="12"
        sm="8"
        md="6"
      >
        <div class="jumboltron">
          <LogoBlue class="mx-auto" />

          <h1 id="title" class="t-text-5xl font-weight-bold primary--text">
            Mission Statement
          </h1>
          <h2 class="t-text-2xl my-5 t-font-mono">
            Creating a Closed Loop Economy for Plastics
          </h2>
        </div>
      </v-col>

      <v-col cols="12" sm="8" md="6">
        <!-- <ModelsChain id="enzyme_model" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Chain from "../Models/Chain.vue";
// import * as Three from "three/build/three.module";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  data() {
    // const loader = new GLTFLoader();
    // loader.load(
    //   "D:AmmarFiverRiamco Docswetransfer_pet_rotating-blend_2022-09-04_1414Chain_A.glb",
    //   function (gltf) {
    //     scene.add(gltf.scene);
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error);
    //   }
    // );
    return {
      scene: null,
      renderer: null,
      camera: null,
      model: null,
      neck: null,
      waist: null,
      possibleAnims: null,
      mixer: null,
      idle: null,
      clock: null,
      currentlyAnimating: false,
      raycaster: null,
      loaderAnim: null,
    };
  },
  methods: {
   
  },
  mounted() {
    //this.gsap.set(".jumboltron", { scale: 0.8 });
    this.gsap.timeline().from(".jumboltron", {
      duration: 1.5,
      delay: 0.3,
      opacity: 0,
      y: 160,
      stagger: 0.1,
      // scale: 0.8,
      ease: "back",
    });
    // .from("#enzyme_model", { xPercent: 100, duration: 0.2 });
  },
  components: { Chain },
};
</script>

<style >
#wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
}
#c {
  width: 100%;
  height: 100%;
}
</style>