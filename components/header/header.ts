import { Vue, Component, Prop } from "nuxt-property-decorator";
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

	public isMenuActive: boolean = false;

	public toggleMenu() {
		this.isMenuActive = !this.isMenuActive;
	}
}
