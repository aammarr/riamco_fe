<template>
  <div id="scene-container" ref="sceneContainer"></div>
</template>
  
  <script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "stats.js";

export default {
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      controls: null,
      renderer: null,
      stats: null,
    };
  },
  methods: {
    init() {
      // set container
      this.container = this.$refs.sceneContainer;

      // add stats
      this.stats = new Stats();
      this.container.appendChild(this.stats.dom);

      clientWidth = 500;
      let clientWidth = 500;
      let clientHeight = 500;

      // add camera
      const fov = 60; // Field of view
      const aspect = clientWidth / clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 1000; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 5, 10);
      this.camera = camera;

      // create scene
      this.scene = new THREE.Scene();
      //this.scene.background = new THREE.Color('skyblue')

      // add lights
      const ambientLight = new THREE.HemisphereLight(
        0xffffff, // bright sky color
        0x222222, // dim ground color
        4 // intensity
      );

      // const ambientLight = new THREE.HemisphereLight(0xffffff);
      // ambientLight.intensity = 4;

      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(10, 10, 10);
      this.scene.add(ambientLight, mainLight);

      // add controls
      this.controls = new OrbitControls(this.camera, this.container);

      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setSize(clientWidth, clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.gammaFactor = 2.2;
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.physicallyCorrectLights = true;
      this.container.appendChild(this.renderer.domElement);

      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect = clientWidth / clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(clientWidth, clientHeight);

      const loader = new GLTFLoader();

      //const file_path = '/three-assets/RobotExpressive.glb' //'/three-assets/RobotExpressive.glb'

      loader.load(
        "models/all_chain.glb",
        (gltf) => {
          const model = gltf.scene;
          model.traverse((child) => {
            if (child.type == "SkinnedMesh") {
              child.frustumCulled = false;
            }
          });

          this.scene.add(model);
        },
        undefined,
        undefined
      );

      this.renderer.setAnimationLoop(() => {
        this.render();
      });
    },
    render() {
      this.renderer.render(this.scene, this.camera);
      this.stats.update();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style >
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
    color: #42b983;
  } */
#scene-container {
  height: 100%;
}
</style>
  