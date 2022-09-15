import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

import Vue from 'vue'


gsap.registerPlugin(ScrollTrigger);

gsap.ScrollTrigger = ScrollTrigger;

Vue.prototype.gsap = gsap;