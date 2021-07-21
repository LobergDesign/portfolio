declare module "*.svg?inline" {
	import Vue from "vue";
	export default Vue;
}
// GSAP
declare interface IGsap {
	to: Function;
	registerPlugin: Function;
	set: Function;
	timeline: Function;
}