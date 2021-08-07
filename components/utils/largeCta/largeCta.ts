import { Vue, Component, Prop } from "nuxt-property-decorator";
import IconArrow from "~/assets/svg/icon-arrow.svg?inline";

@Component({
	name: "LargeCta",
	components: {
		IconArrow,
	},
})
export default class LargeCta extends Vue {
	@Prop({ type: String })
	readonly url!: string;
}
