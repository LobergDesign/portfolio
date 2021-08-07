import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "ImageBlock",
})
export default class ImageBlock extends Vue {
	@Prop({ type: Object as () => any, required: true })
	readonly data!: any;
}
