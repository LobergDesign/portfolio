import { GraphQLClient } from "graphql-request";
import { query } from "../queries/global";

const siteStructure = async () => {
	const endpoint = process.env.GRAPHQL_ENDPOINT as string;
	const previewUrl = "https://portfolio-preview-prod.netlify.app/";
	const token = process.env.BASE_URL === previewUrl ? process.env.GRAPHQL_PREVIEW_TOKEN : process.env.GRAPHQL_TOKEN;
	const setPreviewBool = process.env.BASE_URL === previewUrl ? true : false;
	const isPreview = { isPreview: setPreviewBool };
	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: "Bearer " + token,
		},
	});
	const data = await graphQLClient.request(query, isPreview);
	const menuItems = data.globalSettings.mainMenuCollection.items;
	const workItems = data.workItemCollection.items;
	return {
		menuItems,
		workItems,
	};
};

export async function extendRoutes(routes: any[], resolve: (...param: string[]) => Vue) {
	const site = await siteStructure();
	const sitemapRoutes: IRouteItems[] = [];

	site.menuItems.forEach((route: IMenuItems) => {
		sitemapRoutes.push({
			path: `/${route.slug}/`,
			component: resolve(`~/pages/${route.model}/index.vue`),
			name: route.slug,
		});
	});
	site.workItems.forEach((route: IMenuItems) => {
		sitemapRoutes.push({
			path: `/work/${route.slug}/`,
			component: resolve(`~/pages/${route.model}/index.vue`),
			name: route.slug,
		});
	});

	sitemapRoutes.push({
		path: "/",
		component: resolve(`~/pages/index.vue`),
	});
	return [...routes, ...sitemapRoutes];
}

export async function generate() {
	const site = await siteStructure();
	let routes: IRouteItems[] = [];
	site.menuItems.forEach((item: IMenuItems) => {
		if (item.slug !== null) {
			routes.push({
				route: `/${item.slug}/`,
			});
		}
	});
	site.workItems.forEach((item: IMenuItems) => {
		if (item.slug !== null) {
			routes.push({
				route: `/work/${item.slug}/`,
			});
		}
	});

	return routes;
}
