import { Vue, Component, Prop } from "nuxt-property-decorator";
import IconPin from "~/assets/svg/icon-pin.svg?inline";
import IconDots from "~/assets/svg/icon-dots.svg?inline";
@Component({
	name: "Header",
	components: {
		IconDots,
		IconPin,
	},
})
export default class Footer extends Vue {
	@Prop({ type: Object as () => IHeader, required: true })
	readonly data!: IHeader;
}
