import { Vue, Component, Prop } from "nuxt-property-decorator";
import IconArrow from "~/assets/svg/icon-arrow.svg?inline";
import IconLinkedIn from "~/assets/svg/icon-linkedin.svg?inline";
import IconFacebook from "~/assets/svg/icon-facebook.svg?inline";
import IconEmail from "~/assets/svg/icon-email.svg?inline";

@Component({
	name: "Footer",
	components: {
		IconArrow,
		IconLinkedIn,
		IconEmail,
		IconFacebook,
	},
})
export default class Footer extends Vue {
	@Prop({ type: Object as () => IFooter, required: true })
	readonly data!: IFooter;
}
