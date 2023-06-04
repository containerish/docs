import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import toc from '@jsdevtools/rehype-toc';

const config = defineConfig({
	extensions: ['.svelte.md', '.md'],
	layout: {
		post: './src/lib/postLayout.svelte'
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		],
		toc
	]
});

export default config;
