import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "Footer",
})
export default class Footer extends Vue {
	@Prop({ type: Object as () => IFooter, required: true })
	readonly data!: IFooter;

	private $gsap!: IGsap;

	mounted() {
		const tl = this.$gsap.timeline();
		tl.to("#circle", {
			duration: "6",
			ease: "none",
			rotate: 360,
			transformOrigin: "center center",
			repeat: -1,
		});
	}
}
