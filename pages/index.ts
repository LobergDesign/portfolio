import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/frontpage";
import scrollTrigger from "~/mixins/scrollTrigger";

@Component({ mixins: [scrollTrigger] })
export default class Frontpage extends Vue {
	
	async asyncData({ $apiResource, error }: Context) {
		const response = await $apiResource.getData(query);
		const responseData = response.data;
		if (!responseData) {
			return error({
				statusCode: response.status,
				message: response.errors,
			});
		} else {
			return { data: responseData };
		}
	}
}
