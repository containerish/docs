export async function load({ params, url }) {
	// const { title } = params;
	// const { pathname } = url;

	// const postPromise = import(`../../lib/pages/${title}/index.md`);
	// // const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.js`);

	// const [postResult] = await Promise.all([postPromise]);
	// const { default: page, metadata } = postResult;
	// // const { default: imageData } = imageDataResult;

	// if (!page) {
	// 	return {
	// 		status: 404
	// 	};
	// }

	// const {
	// 	datePublished,
	// 	featuredImage,
	// 	featuredImageAlt,
	// 	ogImage,
	// 	ogSquareImage,
	// 	postTitle,
	// 	seoMetaDescription,
	// 	twitterImage
	// } = metadata;

	// return {
	// 	post: {
	// 		datePublished,
	// 		featuredImage,
	// 		featuredImageAlt,
	// 		ogImage,
	// 		ogSquareImage,
	// 		postTitle,
	// 		seoMetaDescription,
	// 		twitterImage,
	// 		title
	// 	},
	// 	title,
	// 	// imageData,
	// 	page
	// };

	return {
		params,
		url
	};
}
