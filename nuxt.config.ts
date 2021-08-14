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
		link: [
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			{ rel: "icon", type: "image/png", href: "/favicon.png" },
			{ rel: "alternate icon", href: "/favicon.ico" },
			{ rel: "icon", type: "mask-icon", href: "/safari-pinned-tab.svg" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/scss/styles.scss"],
	router: {
		trailingSlash: true,
		linkActiveClass: "is-active",
		extendRoutes: async (_routes: IRouteItems, resolve: (...param: string[]) => Vue) => await extendRoutes(resolve),
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
	// plugins: ["~/plugins/cms", { src: "~/plugins/locomotive.js", ssr: false }],
	plugins: ["~/plugins/cms"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: "~/components", extensions: ["vue"] }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		"nuxt-purgecss",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"nuxt-font-loader",
		"@nuxt/typescript-build",
		"nuxt-gsap-module",
		"nuxt-graphql-request",
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@nuxtjs/svg"],
	colorMode: {
		fallback: "dark",
	},
	gsap: {
		extraPlugins: {
			scrollTrigger: true,
		},
	},
	image: {
		cloudinary: {
			baseURL: "https://res.cloudinary.com/lobergdesign/image/fetch/f_auto,c_scale,w_auto/",
		},
	},
	fontLoader: {
		url: {
			local: "/fonts/font-face.css",
			google: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap",
		},
		// Enable options
		prefetch: true,
		preconnect: true,
	},
	graphql: {
		clients: {
			default: {
				endpoint: process.env.GRAPHQL_ENDPOINT,
				options: {
					headers: {
						authorization:
							"Bearer " +
							(process.env.BASE_URL === "https://portfolio-preview-prod.netlify.app/"
								? process.env.GRAPHQL_PREVIEW_TOKEN
								: process.env.GRAPHQL_TOKEN),
					},
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		babel: {
			plugins: [
				"@babel/plugin-proposal-class-properties",
				"@babel/plugin-proposal-private-methods",
				"@babel/plugin-proposal-private-property-in-object",
			],
		},
	},
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
			/rect/,
			/fade-out/,
		],
	},
	loaders: {
		ts: {
			silent: true,
		},
	},
	pageTransition: {
		$gsap: {} as IGsap,
		css: false,
		beforeEnter(el: HTMLElement) {
			// console.debug("beforeEnter, el", el);
			// const q = this.$gsap.utils.selector(el);
			// this.$gsap.set(q(".curtains__item"), {
			// 	xPercent: 100,
			// 	opacity: 0,
			// });
		},

		enter(el: HTMLElement, done: boolean) {
			// console.debug("enter, el", el);
			// this.$gsap.to(el.querySelectorAll(".curtains__item"), {
			// 	opacity: 1,
			// 	xPercent: -100,
			// 	duration: 1,
			// 	ease: "power2.inOut",
			// 	onComplete: done,
			// });
		},

		// leave(el: HTMLElement, done: boolean) {
		// 	const q = this.$gsap.utils.selector(el);
		// 	console.debug("leave, el", q(".curtains__item"));
		// 	this.$gsap.to(el.querySelectorAll(".curtains__item"), {
		// 		xPercent: -200,
		// 		duration: 2,
		// 		ease: "power2.inOut",
		// 		autoAlpha:0,
		// 		onComplete: done,
		// 	});
		// },
	},
};
