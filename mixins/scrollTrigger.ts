import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ScrollTriggerClass extends Vue {
	private $gsap!: IGsap;
	mounted() {
		const targetSection = "[data-animation-section]";
		const targetSectionLines = "[data-cta-animation-section]";
		const targetElement = "[data-class-animation]";
		this.$nextTick(() => {
			targetSection && this.globalAnimations().setInital();
			targetSectionLines && this.globalAnimations().setInitalLineBlockAnimation();
			setTimeout(() => {
				targetSection && this.globalAnimations().textBlockAnimation();
				targetSectionLines && this.globalAnimations().lineBlockAnimation();
				targetElement && this.globalAnimations().addClassAnimation();
			}, 500);
		});
	}

	private globalAnimations() {
		// basic animation
		const gsap = this.$gsap;
		const targetSection = "[data-animation-section]";
		const targetItem = "[data-animation-item]";
		const setInital = () => {
			gsap.set(targetItem, {
				y: 100,
				opacity: 0,
				skewY: 2,
			});
		};

		const textBlockAnimation = () => {
			const to = (elm: any, index: number) => {
				const q = this.$gsap.utils.selector(elm);
				gsap.to(q(targetItem), {
					opacity: 1,
					y: 0,
					skewY: 0,
					duration: 0.6,
					stagger: 0.1,
					delay: index * 0.25,
				});
			};

			const sections = gsap.utils.toArray(targetSection);
			sections.forEach((section: any, i: number) => {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						once: true,
						ease: "power2",
						start: "-200px center",
						onEnter: () => to(section, i),
					},
				});
			});
		};

		// animation with line transition
		const targetLinesSection = "[data-cta-animation-section]";
		const targetLines = "[data-cta-animation-section-lines]";
		const targetText = "[data-cta-animation-section-text]";

		const setInitalLineBlockAnimation = () => {
			if (document.querySelector(targetText)) {
				gsap.set(targetText, {
					x: -200,
					opacity: 0,
				});
			}
			if (document.querySelector(targetLines)) {
				gsap.set(targetLines, {
					scale: 0,
				});
			}
		};

		const lineBlockAnimation = () => {
			const to = (elm: any, index: number) => {
				const q = this.$gsap.utils.selector(elm);

				if (document.querySelector(targetText)) {
					gsap.to(q(targetText), {
						ease: "power2",
						opacity: 1,
						x: 0,
						duration: 0.5,
						stagger: 0.1,
						delay: index * 0.04,
						force3D: true,
					});
				}
				if (document.querySelector(targetLines)) {
					gsap.to(q(targetLines), {
						ease: "power2",
						scale: 1,
						duration: 0.9,
						stagger: 0.1,
						delay: index * 0.04,
					});
				}
			};

			const sections = gsap.utils.toArray(targetLinesSection);
			sections.forEach((section: any, i: number) => {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						once: true,
						start: "-200px center",
						onEnter: () => to(section, i),
					},
				});
			});
		};

		// add class on scroll

		const addClassAnimation = () => {
			const targetElement = "[data-class-animation]";
			const sections = gsap.utils.toArray(targetElement);
			sections.forEach((section: HTMLElement) => {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						once: true,
						start: "-250px center",
						onEnter: () => {
							section.classList.add("is-active");
						},
					},
				});
			});
		};

		return { setInital, textBlockAnimation, setInitalLineBlockAnimation, lineBlockAnimation, addClassAnimation };
	}
}
