declare module "*.svg?inline" {
	import Vue from "vue";
	export default Vue;
}

declare interface IMenuItems{
	model: string;
	slug: string;

}
declare interface IRouteItems{
	path?:string;
	component?: Vue;
	route?: string;
}

// GSAP
declare interface IGsap {
	to: Function;
	registerPlugin: Function;
	set: Function;
	timeline: Function;
}
