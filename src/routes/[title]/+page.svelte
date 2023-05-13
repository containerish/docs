<script>
	import { onMount } from 'svelte';

	export let data;
	let pageToRender;
	onMount(async () => {

	const { title } = data.params;
	const { pathname } = data.url;

	const postPromise = import(`../../lib/pages/${title}/index.md`);
	// const imageDataPromise = import(`../../lib/generated/posts/${pathname.slice(1)}.js`);

	const [postResult] = await Promise.all([postPromise]);
	const { default: page, metadata } = postResult;
	// const { default: imageData } = imageDataResult;

	if (!page) {
		return {
			status: 404
		};
	}

	const {
		datePublished,
		featuredImage,
		featuredImageAlt,
		ogImage,
		ogSquareImage,
		postTitle,
		seoMetaDescription,
		twitterImage
	} = metadata;

	const result =  {
		post: {
			datePublished,
			featuredImage,
			featuredImageAlt,
			ogImage,
			ogSquareImage,
			postTitle,
			seoMetaDescription,
			twitterImage,
			title
		},
		title,
		// imageData,
		page
	};

	pageToRender = page
})




	// const { page } = data;
</script>

<div
	class="container prose prose-img:rounded-xl prose-headings:text-indigo-800 dark:prose-headings:text-primary-500
	mx-auto py-9 max-w-5xl antialiased prose-pre:bg-surface-700 dark:prose-pre:bg-tertiary-600 prose-pre:text-surface-50-900-token
	prose-pre:text-base prose-pre:font-medium prose-code:rounded-md prose-p:text-slate-800 dark:prose-p:text-slate-100
	lg:px-0 prose-p:font-inter prose-p:text-base prose-li:text-base prose-slate dark:prose-code:bg-tertiary-600
	prose-a:text-sky-600 prose-li:text-slate-800 dark:prose-li:text-slate-100 prose-strong:text-indigo-500 dark:prose-strong:text-indigo-300"
>
	<svelte:component this={pageToRender} />
</div>
