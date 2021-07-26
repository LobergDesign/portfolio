import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import {query} from "~/queries/frontpage";
@Component
export default class Frontpage extends Vue {
	async asyncData({ $apiResource }: Context) {
		console.debug("$apiResource ", await $apiResource.getData(query));
	}
}
