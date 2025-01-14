function setHead(data: ISeo) {
	const meta = {
		title: data?.seoTitle,
		htmlAttrs: {
			lang: "da-DK",
		},
		meta: [
			{
				hid: "description",
				name: "description",
				content: data?.seoDescription || "",
			},
			{
				hid: "title",
				name: "title",
				content: data?.seoTitle || "",
			},

			// OG:
			{
				hid: "og:type",
				property: "og:type",
				content: "website",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: data?.seoTitle || "",
			},
			{
				hid: "og:descriptiont",
				property: "og:description",
				content: data?.seoDescription || "",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "/og.png", // Add the Open Graph image URL here
			},
		],
	};
	return meta;
}

export default setHead;
