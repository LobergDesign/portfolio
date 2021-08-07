import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "ContentArea",
})
export default class ContentArea extends Vue {
	@Prop({ type: Object as () => Components.IContentArea, required: true })
	readonly data!: Components.IContentArea;
}
