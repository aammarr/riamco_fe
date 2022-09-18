<template>
  <div class="scroller">
    <section class="main_section">
      <v-container class="d-flex align-center justify-center t-h-full">
        <v-row justify="center" align="center">
          <v-col align-self="start" class="t-h-full d-flex flex-column justify-center" cols="12" sm="12" md="6" lg="6"
            xl="6">
            <div class="main_content">
              <LogoBlue class="mx-auto" />

              <h1 class="t-text-5xl font-weight-bold primary--text">
                Mission Statement
              </h1>
              <h2 class="t-text-2xl my-5 t-font-mono">
                Creating a Closed Loop Economy for Plastics
              </h2>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <ModelsChain />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="animated__section">
      <div class="text-wrap">
        <div class="panel-text">
          <div>
            <h1 class="display-2 font-weight-light primary--text">
              Our Initiative
            </h1>
            <p class="t-font-sans t-text-lg text-left py-5">
              A Clear Vision, Leading Global Sustainability, and fighting
              Climate Change globally. Set to launch in the United Arab Emirates
              (UAE), Riamco, the UAE’s first enzymatic PET Plastic recycling
              plant, utilizes an innovative recycling process. Providing a full
              circular economy for PET Plastics, this process offers endless
              possibilities across industries to leverage its state-of-the-art
              technology and process design.
            </p>
            <v-btn fab color="primary" large>
              <v-icon> mdi-lightbulb-on </v-icon>
            </v-btn>
          </div>
        </div>
        <div class="panel-text red-text">
          <div>
            <h1 class="display-1 font-weight-light primary--text">
              The Challenge
            </h1>
            <p class="t-font-sans t-text-lg text-left py-5">
              What to do with billions of tones of plastic waste piling up in
              landfills and polluting our natural lands and water?
            </p>
            <p>
              Currently, there is no end solution available to discard enormous
              volumes of plastics without causing a negative environmental
              impact.
            </p>
            <p>
              Plastics are generally disposed of by means of landfills or
              incinerators which have been a significant contributing factor to
              global warming.
            </p>
          </div>
        </div>
        <div class="panel-text orange-text">
          <div>
            <h1 class="display-1 font-weight-light primary--text">
              What This Means?
            </h1>
            <p class="t-font-sans t-text-lg text-left py-5">
              TA circular economy is restorative and regenerative by design.
              This means materials constantly flow around a 'closed loop'
              system, rather than being used once and then discarded. In the
              case of plastic, this means simultaneously keeping the value of
              plastics in the economy, without leakage into the natural
              environment.
            </p>
          </div>
        </div>
        <!-- <div class="panel-text purple-text">
          <div>
            <h1 class="display-1 font-weight-light primary--text">
              How it Works?
            </h1>
            <p class="t-font-sans t-text-lg text-left py-5">
              Image will come here
            </p>
          </div>
        </div> -->
      </div>

      <div class="p-wrap">
        <div class="panel panel__section__one d-flex flex-column">
          <v-card v-for="(card, index) in initiative_cards" :key="`card-${index}`" :class="card.class"
            style="z-index: 1" max-width="400" elevation="10" rounded="md" class="my-2">
            <v-card-text class="pa-1">
              <div class="d-flex flex-row align-center justify-space-between">
                <div class="ma-3">
                  <div class="
                      t-rounded-xl
                      glass__simple__bg
                      d-flex
                      flex-column
                      align-center
                      justify-center
                      t-h-28 t-w-28
                    ">
                    <v-img src="/svg/riamco-logo.svg" contain height="64px" width="64px"></v-img>

                    <span>{{ card.title }}</span>
                  </div>
                </div>

                <div>
                  <p class="t-font-sans t-text-sm text-left mb-0 pa-2">
                    {{ card.text }}
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div class="panel panel__section__two"></div>
        <div class="panel panel__section__three">
          <video autoplay muted loop>
            <source src="videos/site_overview.mp4" type="video/mp4" />
          </video>
        </div>
        <!-- <div class="panel panel__section__four"></div> -->
      </div>
    </section>

    <section style="background: rgba(0, 0, 0, 0.8)" class="t-h-full project_closed_loop">
      <v-container class="
          t-h-full
          white--text
          d-flex
          align-center
          justify-center
          flex-column
        ">
        <h1 class="display-3 text-left">Project Closed Loop</h1>
        <div class="d-flex ma-5 my-10 align-start justify-space-around white--text">
          <div class="pa-5 t-max-w-md">
            <h1>Phase 1</h1>
            <h2 class="display-1 text-left py-5">
              Commercialization and Testing
            </h2>
            <p>
              The completion of Riamco’s commercial laboratory and testing
              facility. This state-of-the-art research and development facility
              and specialized team of scientists will play a major role in
              producing the enzyme utilized in our process design.
            </p>
          </div>

          <div class="pa-5 t-max-w-md">
            <h1>Phase 2</h1>
            <h2 class="display-1 text-left py-5">Operational</h2>
            <p>
              The completion of Riamco’s state of the art enzymatic PET
              Recycling Plant. This plant will have a recycling capacity of
              100,000 tons of PET plastic waste per year.
            </p>
          </div>
        </div>
      </v-container>
    </section>
    <!-- <section>
      <div class="t-relative">
        <div class="t-relative background__video">
          <video autoplay muted loop>
            <source src="videos/revoving_particles.mp4" type="video/mp4" />
          </video>

          <div class="shadow"></div>
        </div>

        <div
          class="
            content_wrapper
            t-absolute t-bottom-0 t-left-0 t-top-0
            d-flex
            pa-5
            align-center
            justify-center
            white--text
          "
        >
          <div class="t-max-w-lg display-2 font-weight-light">
            Project Closed Loop
          </div>

          <div class="t-max-w-lg d-flex align-center justify-space-around">
            <div>
              <h1>Phase 1</h1>
              <p>
                The completion of Riamco’s commercial laboratory and testing
                facility. This state-of-the-art research and development
                facility and specialized team of scientists will play a major
                role in producing the enzyme utilized in our process design.
              </p>
            </div>

            <div>
              <h1>Phase 2</h1>
              <p>
                The completion of Riamco’s state of the art enzymatic PET
                Recycling Plant. This plant will have a recycling capacity of
                100,000 tons of PET plastic waste per year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
  
<script>
import Scrollbar from "smooth-scrollbar";
export default {
  data() {
    return {
      initiative_cards: [
        {
          title: "Vision",
          class: "t-left-10",
          text: "Riamco seeks to establish a full circular approach to how we use and dispose of plastics by creating a closed loop system, from recycled PET to new PET products and eliminating plastic waste.",
        },
        {
          title: "Mission",
          class: "t-relative t-right-10",
          text: "To Achieve net zero plastic leakage into our ecosystems and a more sustainable future for the UAE and the world.",
        },
      ],
    };
  },
  mounted() {
    let bodyScrollBar = Scrollbar.init(document.getElementById("v_main"), {
      damping: 0.1,
      delegateTo: document,
    });
    this.gsap.ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(this.gsap.ScrollTrigger.update);

    this.gsap.set(".panel", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    var images = this.gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = this.gsap.timeline({
        scrollTrigger: {
          trigger: "section.animated__section",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.from(image, { opacity: 0 })
        .to(image, { height: 0, y: "10%", opacity: 0 })
        .to(image, { opacity: 0, y: "0%" }, 0.66);
    });

    this.gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    var texts = this.gsap.utils.toArray(".panel-text");

    texts.forEach((text, i) => {
      var tl = this.gsap.timeline({
        scrollTrigger: {
          trigger: "section.animated__section",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(text, { duration: 0.33, opacity: 1, y: "10%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    });

    this.gsap.ScrollTrigger.create({
      trigger: "section.animated__section",
      scroller: ".scroller",
      scrub: true,
      markers: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + images.length * window.innerHeight,
      invalidateOnRefresh: true,
    });

    // Project Closed Loop Animation
    this.gsap.to(".project_closed_loop", {
      scrollTrigger: {
        trigger: ".project_closed_loop",
        toggleActions: "restart pause reverse pause",
        start: "top top",
      },
      duration: 5,
      opacity: 0,
      // ease: "power3.inOut",
    });
  },
};
</script>
  
<style lang="scss">
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}

.background__video {
  video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: relative;
  }
}
</style>

<style>
.scroller {
  height: 100vh;
}

/* .panel__section__one {
  align-items: center;
  z-index: 4;
  background: linear-gradient(
    45deg,
    rgba(41, 175, 141, 1) 0%,
    rgba(57, 191, 232, 1) 35%,
    rgba(82, 90, 191, 1) 81%
  );
  justify-content: center;
  border-radius: 50px;
  height: 550px !important;
} */

.main_section {
  /* display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;*/
  height: 100%;
  /*-webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center; */
  /* background-color: #753500; */
}

.text {
  color: #fff;
}

.animated__section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  /* background-color: #070707; */
}

.blue {
  height: 100vh;
  /* background-color: #00026d; */
}

.text-wrap {
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 80vh;
}

.panel-text {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  /* background-color: #070707; */

  transform: translateY(100%);
  opacity: 0;
}

.panel-text.blue-text {
  /* color: white; */
  text-align: left;
}

.panel-text.red-text {
  /* color: red; */
}

.panel-text.purple-text {
  /* color: purple; */
}

.panel-text.orange-text {
  /* color: orange; */
}

.p-wrap {
  position: relative;
  overflow: hidden;
  width: 550px;
  height: 80vh;
}

.panel {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  /* background-image: url("../images/5ed12171d9d512cb2feead83_5.jpg"); */
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.panel._2 {
  z-index: 1;
  /* background-image: url("../images/5f5a5b3515c4dd0c2c455925_110642301_938622823267359_7859124022958180678_n201.jpg"); */
}

.panel.blue {
  z-index: auto;
}

.panel.red {
  z-index: auto;
  background-color: red;
  background-image: none;
}

.panel.orange {
  z-index: auto;
  background-color: #cf5d00;
  background-image: none;
}

.panel.purple {
  z-index: auto;
  background-color: #808;
  background-image: none;
}
</style>