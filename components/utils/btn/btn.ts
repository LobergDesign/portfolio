import { Vue, Component, Prop } from "nuxt-property-decorator";
import IconArrow from "~/assets/svg/icon-arrow.svg?inline";

@Component({
	name: "Btn",
	components: {
		IconArrow,
	},
})
export default class Btn extends Vue {
	@Prop({ type: String })
	readonly slug!: string;

	@Prop({ type: String })
	readonly text!: string;
}
