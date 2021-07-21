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
	generate: {
		fallback: true,
		// exclude pages thats unused
		// eg. [/about/, /news/]
		exclude: [],
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: "~/components", extensions: ["vue"] }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"nuxt-purgecss",
		"@nuxt/typescript-build",
		"nuxt-gsap-module",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxtjs/svg"],

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
