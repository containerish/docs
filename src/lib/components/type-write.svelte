<script lang="ts">
	import { onMount } from 'svelte';
	import TypeIt from 'typeit';

	onMount(() => {
		new TypeIt('#typewriter', {
			speed: 50,
			loop: false,
			waitUntilVisible: true,
			afterComplete: (t: any) => {
				t.destroy();
			}
		})
			.type('<span class="text-6xl font-semibold">Welcome!!</span>')
			.break()
			.break()
			.type(
				'<span class="text-4xl antialised">OpenRegistry Documentation is all about</span> <span class="name text-4xl">containers</span> <span class="text-4xl">and container registries</span>'
			)
			.pause(600)
			.delete('.name')
			.type(
				'<span class="text-4xl antialised text-secondary-600">learning while having fun! 😉</span>'
			)
			.go();
	});
</script>

<div class="container flex justify-start items-center h-64">
	<div id="typewriter" class="text-2xl text-slate-800 dark:text-slate-100 font-mono" />
</div>
