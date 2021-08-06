import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ScrollTriggerClass extends Vue {
	private $gsap!: IGsap;
	private $ScrollTrigger!: IScrollTrigger;

	mounted() {
		this.triggerAnimation();
  
	}

	
	private triggerAnimation() {
		const gsap = this.$gsap;
		const scrolltrigger = this.$ScrollTrigger;
		const target = ".set-animation";
		// const anim = gsap.to(target, {
		// 	x: 400,
		// 	rotation: 360,
		// 	duration: 3,
		// });
		// scrolltrigger.create({
		// 	trigger: target,
		// 	animation: anim,
		// });

		gsap.utils.toArray(target).forEach((blockSection: any) => {
			scrolltrigger.create({
				trigger: blockSection,
				start: "-200px center",
				onEnter: () => {
					blockSection.classList.add("in-view");
				},
			});
		});
	}
}
