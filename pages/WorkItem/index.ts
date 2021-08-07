import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/workItemPage";
import scrollTrigger from "~/mixins/scrollTrigger";

@Component({ mixins: [scrollTrigger] })
export default class WorkItemPage extends Vue {
	async asyncData({ $apiResource, error, route }: Context) {
		const routeName = route.name as string;
		const response = await $apiResource.getDynamicData(query, routeName);
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
