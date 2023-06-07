<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import { AppBar, AppShell, LightSwitch, getModeUserPrefers } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/footer.svelte';
	let logo = getModeUserPrefers() ? '/logo.png' : '/logo-light.png';

	const handleLogo = () => {
		if (getModeUserPrefers()) {
			logo = '/logo.png';
		} else {
			logo = '/logo-light.png';
		}
	};
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			background="border-b-2 border-primary-100-800-token"
			padding="py-3 px-6"
			shadow="shadow-sm"
		>
			<svelte:fragment slot="lead">
				<a href="/" class="flex gap-1 items-center">
					<img src={logo} alt="" width="50px" />
					<span class="ml-3 text-[#19195C] dark:text-primary-200 text-4xl font-semibold">
						Docs</span
					></a
				>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch on:click={handleLogo} rounded="rounded-full" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="mx-auto w-full h-full">
		<slot />
	</div>
	<Footer />
</AppShell>
