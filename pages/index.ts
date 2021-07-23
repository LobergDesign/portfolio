
import { Vue, Component } from "nuxt-property-decorator";
@Component
export default class Frontpage extends Vue {

	async asyncData({ $graphql }: any) {
	console.debug("$graphsql ", $graphql)
	}
}
