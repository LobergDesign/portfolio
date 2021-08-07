import { Vue, Component, Prop } from "nuxt-property-decorator";
//@ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "TextBlock",
})
export default class TextBlock extends Vue {
	@Prop({ type: Object as () => Components.ITextArea, required: true })
	readonly data!: Components.ITextArea;

	private $gsap!: IGsap;
	private $ScrollTrigger!: IScrollTrigger;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
	mounted() {
		this.triggerAnimation().setInital();
		this.$nextTick(() => {
			this.triggerAnimation().textBlockAnimation();
		});
	}

	private triggerAnimation() {
		const gsap = this.$gsap;
		const scrolltrigger = this.$ScrollTrigger;
		const target = ".set-animation";
		const setInital = () => {
			const set = gsap.set(target, {
				autoAlpha: 0,
				y: 100,
				opacity: 0,
				skewY: 2,
			});
		};

		const textBlockAnimation = () => {
			const to = (index: number) => {
				gsap.to(target, {
					autoAlpha: 1,
					opacity: 1,
					y: 0,
					skewY: 0,
					duration: 0.6,
					stagger: 0.1,
					delay: index * 0.15,
				});
			};

			gsap.utils.toArray(target).forEach((blockSection: any, i: number) => {
				scrolltrigger.create({
					trigger: blockSection,
					start: "-200px center",
					onEnter: () => to(i),
				});
			});
		};
		return { setInital, textBlockAnimation };
	}
}
