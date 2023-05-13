<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import Sidebar from '$lib/components/sidebar.svelte';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<div class="bg-primary-50 dark:bg-surface-800 h-full flex px-12 relative">
		<slot />
	</div>
</AppShell>
