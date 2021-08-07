import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ScrollTriggerClass extends Vue {
	private $gsap!: IGsap;
	private $ScrollTrigger!: IScrollTrigger;
	// beforeDestroy() {

	// 	console.log("beforeDestroy");
	// 	// @ts-ignore
	// 	this.$ScrollTrigger.kill();
	// }
	// mounted() {
	// 	// @ts-ignore
	// 	this.$ScrollTrigger.create();
	// }

	// private triggerAnimation() {
	// 	const gsap = this.$gsap;
	// 	const scrolltrigger = this.$ScrollTrigger;

	// 	const textBlockAnimation = () => {
	// 		const target = ".set-animation";

	// 		const set = gsap.set(target, {
	// 			y: -100,
	// 			opacity: 0,
	// 		});
	// 		const to = () => {
	// 			gsap.to(target, {
	// 				opacity: 1,
	// 				y: 0,
	// 				duration: 1,
	// 			});
	// 		};

	// 		gsap.utils.toArray(target).forEach((blockSection: any) => {
	// 			set;
	// 			scrolltrigger.create({
	// 				trigger: blockSection,
	// 				start: "-100px center",
	// 				onEnter: () => to(),
	// 			});
	// 		});
	// 	};

	// 	return { textBlockAnimation };
	// }
}
