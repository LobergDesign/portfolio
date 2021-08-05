import { Vue, Component, Prop } from "nuxt-property-decorator";
//@ts-ignore
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
@Component({
	name: "Hero",
})
export default class Hero extends Vue {
	@Prop({ type: Object as () => Components.IHero, required: true })
	readonly data!: Components.IHero;

	@Prop({ type: Number})
	readonly number!: number;

	public toHtmlString(content: any) {
		return documentToHtmlString(content);
	}
}
