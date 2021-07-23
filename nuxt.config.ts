
import { extendRoutes, generate } from "./configurations/router";
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "portfolio",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/scss/styles.scss"],
	router: {
		trailingSlash: true,
		linkActiveClass: "is-active",
		extendRoutes: async (routes: IRouteItems, resolve: (...param: string[]) => Vue) => await extendRoutes(resolve),
	},
	generate: {
		fallback: true,
		// exclude pages thats unused
		// eg. [/about/, /news/]
		exclude: [/ContentPage/],
		crawler: false,
		 routes: async () => await generate(),
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/cms"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: "~/components", extensions: ["vue"] }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"nuxt-purgecss",
		"@nuxt/typescript-build",
		"nuxt-gsap-module",
		"nuxt-graphql-request",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxtjs/svg"],

	graphql: {
		clients: {
			default: {
				endpoint: process.env.GRAPHQL_ENDPOINT,
				options: {
					headers: {
						authorization:
							"Bearer " +
							(process.env.BASE_URL === "https://portfolio-preview-hh4qq.ondigitalocean.app/"
								? process.env.GRAPHQL_PREVIEW_TOKEN
								: process.env.GRAPHQL_TOKEN),
					},
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	loading: false,
	robots: {
		UserAgent: "*",
		Disallow: process.env.ROBOTS === "false" ? "/" : "",
		sitemap: process.env.BASE_URL + "/sitemap.xml",
	},
	sitemap: {
		hostname: process.env.BASE_URL || "http://localhost:3000",
		// exclude sitemap urls
		exclude: ["/about/", "/news/**"],
		// add trailing slash to final sitemap
		trailingSlash: true,
		priority: 1,
		path: "/sitemap.xml",
		gzip: true,
		generate: false,
	},
	// Control ssr
	ssr: process.env.SERVER_RENDER === "true",
	purgeCSS: {
		// whitelist spicific classes
		whitelist: [],
		// whitelist spicific classes and all that contains that naming
		whitelistPatterns: [
			/__layout/,
			/__nuxt/,
			/is-inview/,
			/is/,
			/hooper/,
			/social-links__item/,
			/svg/,
			/g/,
			/path/,
		],
	},
	loaders: {
		ts: {
			silent: true,
		},
	},
};
