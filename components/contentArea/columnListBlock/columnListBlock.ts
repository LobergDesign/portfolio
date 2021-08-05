import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "columnListBlock",
})
export default class columnListBlock extends Vue {
	@Prop({ type: Object as () => Components.IColumnList })
	 data!: Components.IColumnList;
}
