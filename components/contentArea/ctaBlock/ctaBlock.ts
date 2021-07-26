import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "CtaBlock",
})
export default class CtaBlock extends Vue {
	@Prop({ type: Object as () => Components.ICta, required: true })
	readonly data!: Components.ICta;
}
