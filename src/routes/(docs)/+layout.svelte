<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import {
		AppBar,
		AppShell,
		Drawer,
		LightSwitch,
		drawerStore,
		getModeUserPrefers
	} from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/sidebar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	const handleDrawer = () => {
		drawerStore.open();
	};

	beforeNavigate(() => {
		drawerStore.close();
	});

	afterNavigate(() => {
		drawerStore.close();
	});

	let logo = getModeUserPrefers() ? '/logo.png' : '/logo-light.png';

	const handleLogo = () => {
		if (getModeUserPrefers()) {
			logo = '/logo.png';
		} else {
			logo = '/logo-light.png';
		}
	};
</script>

<Drawer bgDrawer="bg-primary-50-900-token" blur="backdrop-blur-xs" width="w-72" class="lg:hidden">
	<div data-sveltekit-reload class="flex flex-col items-start w-full p-6">
		<a href="/get-started" class="text-lg font-semibold">Get Started</a>
		<ul class="">
			<li>
				<a href="/get-started#sign-up">
					<span class="flex-auto !text-primary-900-50-token">Sign Up</span>
				</a>
			</li>
			<li>
				<a href="/get-started#sign-in">
					<span class="flex-auto !text-primary-900-50-token">Sign In</span>
				</a>
			</li>
			<li>
				<a href="/get-started#using-docker-cli">
					<span class="flex-auto !text-primary-900-50-token"> Using Docker CLI</span>
				</a>
			</li>
			<li>
				<a href="/get-started#push-an-image">
					<span class="flex-auto !text-primary-900-50-token">Push an Image</span>
				</a>
			</li>
			<li>
				<a href="/get-started#pull-an-image">
					<span class="flex-auto !text-primary-900-50-token">Pull an Image</span>
				</a>
			</li>
			<li>
				<a href="/get-started#how-to-run-this-project-locally">
					<span class="flex-auto !text-primary-900-50-token">FAQ</span>
				</a>
			</li>
		</ul>
		<div class="h-0.5 my-3 bg-primary-200-700-token" />

		<a href="/containers" class="text-lg font-semibold">Containers</a>
		<ul class="">
			<li>
				<a href="/containers#what-are-containers-">
					<span class="flex-auto !text-primary-900-50-token">What are containers</span>
				</a>
			</li>
			<li>
				<a href="/containers#why-containers-and-how-do-they-work">
					<span class="flex-auto !text-primary-900-50-token">Why Containers</span>
				</a>
			</li>
			<li>
				<a href="/containers#what-is-a-container-registry">
					<span class="flex-auto !text-primary-900-50-token">What is a Container Registry?</span>
				</a>
			</li>
		</ul>
		<div class="h-0.5 my-3 bg-primary-200-700-token" />

		<a href="/zines" class="text-lg font-semibold">Zines</a>
		<ul class="">
			<li>
				<a href="/zines#understanding-containers">
					<span class="flex-auto !text-primary-900-50-token"> Understanding Containers</span>
				</a>
			</li>
			<li>
				<a href="/zines#what-is-openregistry">
					<span class="flex-auto !text-primary-900-50-token"> What is OpenRegistry?</span>
				</a>
			</li>
			<li>
				<a href="/zines#how-does-it-work">
					<span class="flex-auto !text-primary-900-50-token"> How does it work?</span>
				</a>
			</li>
			<li>
				<a href="/zines#why-do-we-need-this">
					<span class="flex-auto !text-primary-900-50-token"> Why do we need this?</span>
				</a>
			</li>
		</ul>
		<div class="h-0.5 my-3 bg-primary-200-700-token" />

		<a href="/collaborations" class="text-lg font-semibold">Collaborations</a>
		<ul class="">
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> Akash Network</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> IPFS</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> Storj</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> iExec</span>
				</a>
			</li>
		</ul>
		<div class="h-0.5 my-3 bg-primary-200-700-token" />

		<a href="#" class="text-lg font-semibold">Change Log</a>
		<ul class="">
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> Progress so far</span>
				</a>
			</li>
		</ul>
		<div class="h-0.5 my-3 bg-primary-200-700-token" />

		<a href="#" class="text-lg font-semibold">Contact</a>
		<ul class="">
			<li>
				<a href="#">
					<span class="flex-auto !text-primary-900-50-token"> Contact us</span>
				</a>
			</li>
		</ul>
	</div>
</Drawer>
<AppShell slotFooter="">
	<svelte:fragment slot="header">
		<AppBar
			background="border-b-2 border-primary-100-800-token"
			padding="py-3 px-3"
			shadow="shadow-sm"
			gap="gap-14 lg:gap-1"
		>
			<svelte:fragment slot="lead">
				<button
					on:click={handleDrawer}
					type="button"
					class="btn variant-soft bg-tertiary-300-600-token mr- rounded-full px-2.5 lg:hidden"
				>
					<MenuIcon />
				</button>
			</svelte:fragment>
			<svelte:fragment>
				<a href="/" class="flex gap-1 items-center"
					><img src={logo} alt="" width="50px" />
					<span class="ml-2 text-[#19195C] dark:text-primary-200 text-4xl font-semibold">
						Docs</span
					></a
				>
			</svelte:fragment>
			<svelte:fragment slot="trail"
				><LightSwitch on:click={handleLogo} rounded="rounded-full" /></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<div class="bg-primary-50 dark:bg-surface-800 h-full flex px-12 relative">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
