import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({
	name: "TableListBlock",
})
export default class TableListBlock extends Vue {
	@Prop({ type: Object as () => Components.ITableList })
	 data!: Components.ITableList;
}
