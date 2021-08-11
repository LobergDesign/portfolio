import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/global";

@Component
export default class Default extends Vue {
	public header: IHeader | {} = {};
	public footer: IFooter | {} = {};
	// gsap injection instance
	private $gsap!: IGsap;

	private gsapEeasing: string = "power1.out";

	private isSmallDevices(){
		if (window.matchMedia("(max-width: 768px)").matches) {
			return true;
		} else {
			return false;
		}
	}

	// main gsap handler
	private gsapOnLoadHandler() {
		document.body.style.overflow = "hidden";
		const tl = this.$gsap.timeline();
		const gsap = this.$gsap;

		const hideElements = () => {
			tl.to("#counter, #percent", {
				opacity: 0,
				autoAlpha: 0,
			});
			document.body.style.overflow = "auto";
			document.body.classList.add("is-ready");
		};

		const counter = () => {
			tl.set(".app-init-effect__counter", {
				visibility: "visible",
				yPercent: 50,
			})
				.to(".app-init-effect__counter", {
					yPercent: 0,
					opacity: 1,
					duration: 0.1,
					ease: this.gsapEeasing,
				})
				.to("#counter", {
					duration: this.isSmallDevices() ? 0.7 : 1.8,
					ease: this.gsapEeasing,
					innerText: 100,
					roundProps: "innerText",
					delay: 0.25,
					onUpdate: () => {
						const target = document.getElementById("counter") as HTMLElement;
						const val = gsap.getProperty(target, "innerText");
						target.innerText = val;
					},
					onComplete: hideElements,
				});
		};

		const lines = () => {
			const target = ".lines-effect";
			gsap.fromTo(
				target,
				{ xPercent: -100, visibility: "visible" },
				{
					xPercent: 0,
					duration:this.isSmallDevices() ? .35:  1.3,
					stagger: 0.1,
					ease: this.gsapEeasing,
					delay: 0.3,
				}
			);
		};

		return { counter, lines };
	}
	private linesScrollTrigger() {
		this.$gsap.to("[data-lines]", {
			yPercent: -36,
			opacity: 0,
			ease: this.gsapEeasing,
			force3D: true,
			scrollTrigger: {
				scrub: true,
			},
		});
	}
	// initial state
	public customBeforeAppear() {
		this.gsapOnLoadHandler().counter();
		this.gsapOnLoadHandler().lines();
	}
	mounted() {
		this.linesScrollTrigger();
	}
	async fetch() {
		const nuxtContext: Context = this.$nuxt.context;
		const response = (await nuxtContext.$apiResource.getData(query)) as any;

		// set header items
		const { headerValueOne, headerValueTwo, mainMenuCollection }: IHeader = response.globalSettings;
		this.header = { headerValueOne, headerValueTwo, mainMenuCollection };

		// set footer items
		const { footerCtaText, rotateEffectText, email, facebook, linkedIn, phoneNumber }: IFooter =
			response.globalSettings;

		this.footer = { footerCtaText, rotateEffectText, email, facebook, linkedIn, phoneNumber };
	}
}
