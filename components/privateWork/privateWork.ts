import { Vue, Component, Prop } from "nuxt-property-decorator";
import IconArrow from "~/assets/svg/icon-arrow.svg?inline";

@Component({
	name: "PrivateWork",
	components: {
		IconArrow,
	},
})
export default class PrivateWork extends Vue {
	@Prop({ type: Object as () => Components.IWorkList, required: true })
	readonly privateWorkUC!: Components.IWorkList;

	@Prop({ type: Object as () => Components.IWorkList, required: true })
	readonly privateWork!: Components.IWorkList;
}
