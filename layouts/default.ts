import { Context } from "@nuxt/types";
import { Vue, Component, Watch } from "nuxt-property-decorator";
import { query } from "~/queries/global";

@Component
export default class Default extends Vue {
	public header: IHeader | {} = {};
	public footer: IFooter | {} = {};
	// gsap injection instance
	private $gsap!: IGsap;

	private gsapEeasing: string = "power1.out";
	// main gsap handler
	private gsapOnLoadHandler() {
		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden";
		const someFunction = () => {
			tl.to("#counter, #percent", {
				opacity: 0,
			});
			document.body.style.overflow = "auto";
			document.body.classList.add("is-ready");
		};
		const tl = this.$gsap.timeline();

		const counter = () => {
			tl.from("#counter", {
				duration: 2.4,
				opacity: 1,
				ease: this.gsapEeasing,
				innerText: 0,
				roundProps: "innerText",
				onUpdate: () => {
					const target = document.getElementById("counter") as HTMLElement;
					const val = this.$gsap.getProperty(target, "innerText");
					target.innerText = val;
				},
				onComplete: someFunction,
			});
		};
		const lines = () => {
			const target = ".lines-effect";
			this.$gsap.fromTo(
				target,
				{ xPercent: -100 },
				{ xPercent: 0, duration: 2, stagger: 0.1, ease: this.gsapEeasing }
			);

			this.$gsap.to(target, {
				y: -200,
				opacity: 0,
				ease: "power3",
				scrollTrigger: {
					scrub: true,
				},
			});
		};

		return { counter, lines };
	}

	// initial state
	public customBeforeAppear() {
		this.gsapOnLoadHandler().counter();
		this.gsapOnLoadHandler().lines();
	}

	mounted() {
		window.scrollTo(0, 0);
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
