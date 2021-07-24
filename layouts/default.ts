import { Context } from "@nuxt/types";
import { Vue, Component } from "nuxt-property-decorator";
import { query } from "~/queries/global";

@Component
export default class Default extends Vue {
	public header: IHeader | {} = {};
	public footer: IFooter | {} = {};

	async fetch() {
		const nuxtContext: Context = this.$nuxt.context;
		const response = (await nuxtContext.$apiResource.getData(query)) as any;

		// set header items
		const { headerValueOne, headerValueTwo, mainMenuCollection }: IHeader = response.globalSettings;
		this.header = { headerValueOne, headerValueTwo, mainMenuCollection };

		// set footer items
		const { footerCtaText, rotateEffectText, email, facebook, linkedIn, phoneNumber }: IFooter =
			response.globalSettings;

		this.footer = { footerCtaText, rotateEffectText, email, facebook, linkedIn, phoneNumber };
	}
}
