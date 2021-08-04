import { Vue, Component, Prop } from "nuxt-property-decorator";
//@ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "TextBlock",
})
export default class TextBlock extends Vue {
	@Prop({ type: Object as () => Components.ITextArea, required: true })
	readonly data!: Components.ITextArea;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
