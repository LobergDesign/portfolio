import { Vue, Component } from "nuxt-property-decorator";


@Component
export default class Default extends Vue {



	async fetch() {
	console.debug("test");
	}

}
