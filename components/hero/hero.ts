import { Vue, Component, Prop } from "nuxt-property-decorator";
@Component({
	name: "Hero",
})
export default class Hero extends Vue {
	@Prop({ type: Object as () => Components.IHero, required: true })
	readonly data!: Components.IHero;
}
