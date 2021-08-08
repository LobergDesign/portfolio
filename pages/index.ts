import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/frontpage";
import scrollTrigger from "~/mixins/scrollTrigger";
import setHead from "~/configurations/head";

@Component({ mixins: [scrollTrigger] })
export default class Frontpage extends Vue {

	public seo!: ISeo;

	public mounted(){
		this.$nextTick(() => window.scrollTo(0, 0));
	}
	head() {
		return setHead(this.seo);
	}
	async asyncData({ $apiResource, error }: Context) {
		const response = await $apiResource.getData(query);
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
