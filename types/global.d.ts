declare module "*.svg?inline" {
	import Vue from "vue";
	export default Vue;
}

declare interface IMenuItems{
	model: string;
	slug: string;
	menuName?: string;

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

// header
declare interface IHeader{
	mainMenuCollection: Array<IMenuItems>;
	headerValueOne: string;
	headerValueTwo: string;
}

// footer
declare interface IFooter{
	footerCtaText: string;
	email: string;
	facebook: string;
	linkedIn: string;
	phoneNumber: string;
	rotateEffectText: string;
}