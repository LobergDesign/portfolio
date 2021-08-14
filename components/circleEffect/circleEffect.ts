import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "CircleEffect",
})
export default class CircleEffect extends Vue {
	@Prop({ type: String, required: true })
	readonly text!: string;

	private $gsap!: IGsap;

	private scaleOnScroll() {
		const target = "[data-scale-down]";

		const scale = () => {
			this.$gsap.to(target, {
				scale: 0.2,
				opacity: 0.2,
				ease: "power1",
				scrollTrigger: {
					trigger: ".hero",
					start: "top",
					end: "bottom top-=100%",
					scrub: 0.6,
				},
			});
		};
		const init = () => {
			this.$gsap.set(target, {
				scale: 1,
			});
		};
		return { scale, init };
	}
	private rotate() {
		const tl = this.$gsap.timeline();

		const initRotate = () => {
			tl.to("#circle", {
				duration: "6",
				ease: "none",
				rotate: 360,
				transformOrigin: "center center",
				repeat: -1,
			});
		};

		return { initRotate };
	}

	mounted() {
		this.scaleOnScroll().init();
		this.$nextTick(() => {
			this.rotate().initRotate();
			setTimeout(() => {
				this.scaleOnScroll().scale();
			}, 500);
		});
	}
}
