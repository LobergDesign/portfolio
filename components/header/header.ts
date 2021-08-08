import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import IconPin from "~/assets/svg/icon-pin.svg?inline";
import IconArrow from "~/assets/svg/icon-arrow.svg?inline";
@Component({
	name: "Header",
	components: {
		IconPin,
		IconArrow,
	},
})
export default class Footer extends Vue {
	@Prop({ type: Object as () => IHeader, required: true })
	readonly data!: IHeader;

	// gsap injection instance
	private $gsap!: IGsap;
	private $ScrollTrigger!: IScrollTrigger;

	public isMenuActive: boolean = false;

	public isHeaderInfoActive: boolean = true;

	public toggleMenu() {
		this.isMenuActive = !this.isMenuActive;
	}

	// private headerScroll(){
	// 	const windowOffset = window.pageYOffset;
	// 	windowOffset > 200 ? (this.isHeaderTransparent = false) : (this.isHeaderTransparent = true);
	// }

	private controlHeader() {
		const initScrolltrigger = this.$ScrollTrigger.create({
			start: "top",
			onUpdate: (self: any) => {
				const { direction } = self;
				// header element
				const headerItem = this.$refs.header as HTMLElement;

				// mousewheel up
				if (direction == -1) {
					if (!this.isMenuActive) {
						this.$gsap.to(headerItem, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
					}
				}
				// mousewheel down
				if (direction === 1) {
					if (!this.isMenuActive) {
						this.$gsap.to(headerItem, { opacity: 0, y: -60, duration: 0.7, ease: "power2.out" });
					}
				}
			},
		});

		initScrolltrigger.enable();
	}

	// Route watch
	@Watch("$route")
	public routeChange() {
		// window.removeEventListener("scroll", this.setHeaderBg);
		const isReadyClass = "is-ready";
		const body = document.body;
		if (body.classList.contains(isReadyClass)) {
			body.classList.remove(isReadyClass);
		}
		this.$nextTick(() => {
			// close menu on route change
			this.isMenuActive && (this.isMenuActive = !this.isMenuActive);
			setTimeout(() => {
				body.classList.add(isReadyClass);
			}, 500);
		});
	}

	public mounted() {
		this.controlHeader();
	}
}
