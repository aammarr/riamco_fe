<template>
  <div style="width: 100%; height: 100%" id="scene-container contsc" ref="sceneContainer"></div>
</template>
  
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Stats from "stats.js";

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
      // this.stats = new Stats();
      // this.container.appendChild(this.stats.dom);

      let clientWidth = window.innerWidth;
      let clientHeight = window.innerHeight;

      // add camera
      const fov = 1//60; // Field of view
      const aspect = clientWidth / clientHeight;
      const near = 0.1; // the near clipping plane
      const far = 1000; // the far clipping plane
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(150, 5, 500);
      this.camera = camera;

      // create scene
      this.scene = new THREE.Scene();
      //this.scene.background = new THREE.Color('skyblue')

      // add lights
      // const ambientLight = new THREE.HemisphereLight(
      //   0xffffff, // bright sky color
      //   0x222222, // dim ground color
      //   4 // intensity
      // );


      const dirLight1 = new THREE.DirectionalLight(0xffffff);
      dirLight1.position.set(1, 1, 1);


      const dirLight2 = new THREE.DirectionalLight(0x002288);
      dirLight2.position.set(- 1, - 1, - 1);


      const ambientLight = new THREE.AmbientLight( 0x222222 ); //new THREE.HemisphereLight(0xffffff);
      ambientLight.intensity = 4;

      const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
      mainLight.position.set(10, 10, 100);
      this.scene.add(ambientLight, mainLight, dirLight1, dirLight2);

      // add controls
      this.controls = new OrbitControls(this.camera, this.container);
      //this.controls.autoRotate = true;
      this.controls.enableZoom = false;
      // this.controls.target.x = -30
      // this.controls.target0.x = -30

      console.log('Target', this.controls);

      this.controls.update();

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
        "models/PET_COLORED.glb",
        (gltf) => {
          const model = gltf.scene;
          if (model) {
            model.rotation.x += 100;
            model.rotation.y += 10;

            model.position.x += 3;
            model.position.y += 1;

          }
          // model.traverse((child) => {
          //   if (child.type == "SkinnedMesh") {
          //     child.frustumCulled = false;
          //   }
          // });

          this.scene.add(model);
        },
        undefined,
        undefined
      );

      window.addEventListener('resize', this.onWindowResize);

      this.renderer.setAnimationLoop(() => {
        this.render();
      });
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    render() {
      this.controls.dispose();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      // this.stats.update();
    },
  },
  mounted() {
    this.init();

    // document.querySelector('canvas').addEventListener('click', function (e) {

    //   console.log('canvas');

    //   e.stopPropagation();

    // });
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
  left: 0;
  /* position: absolute; */
}

#scene-container:focus {
  border: none !important;
}
</style>
  