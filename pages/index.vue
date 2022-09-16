<template>
  <div class="wrap-all">
    <MainHome class="section home_section" />

    <!-- <MainInitiative_2 id="our_initiative" /> -->

    <Initiative_2 class="section" id="our_initiative" />

    <MainProjectLoop class="section" id="project_closed_loop" />

    <MainContact class="section" id="contact" />
  </div>
</template>

<script>
import Initiative_2 from "~/components/Main/Initiative_2.vue";
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  name: "IndexPage",
  components: { Initiative_2 },
  // mounted() {

  //   gsap.registerPlugin(ScrollTrigger); 

  //   gsap.set('.center', { xPercent: -50, yPercent: -50 })
  //   gsap.set('section', { autoAlpha: 0 })


  //   // a loop for the other sections '.section'
  //   var sections = gsap.utils.toArray("section");



  //   var largeTL = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.home_section',
  //       pin: '.wrap-all',
  //       scrub: 0.5,
  //       start: "top top",
  //       //end: '+=550%',
  //       end: 'bottom bottom',
  //     },
  //   })




  //   sections.forEach(function (elem, i) {

  //     gsap.set("section", { zIndex: (i, target, targets) => targets.length - i });

  //     // select the relevant elements  
  //     var lines = elem.querySelectorAll(".lines");

  //     const tlDelay = i;

  //     var smallTL = gsap.timeline()

  //     smallTL
  //       .to(elem, { autoAlpha: 1 }, tlDelay)
  //     //   .from(lines, { xPercent: -100, duration: 1, ease: 'power2.out', stagger: 0.6 })
  //       .to(elem, { autoAlpha: 0 })
  //       //.to({}, {duration:1}) // a little pause at the end
  //       ;

  //     largeTL.add(smallTL, tlDelay);

  //   })
  // }
};
</script>
