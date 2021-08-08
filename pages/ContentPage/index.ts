import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/contentPage";
import scrollTrigger from "~/mixins/scrollTrigger";
import setHead from "~/configurations/head";

@Component({ mixins: [scrollTrigger] })
export default class ContentPage extends Vue {
	public seo!: ISeo;
	public mounted(){
		this.$nextTick(() => window.scrollTo(0, 0));
	}
	head() {
		return setHead(this.seo);
	}
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
				// @ts-ignore
				return { data: responseData, seo: responseData.seoSection };
		}
	}
}
