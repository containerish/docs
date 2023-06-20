<script lang="ts">
	import Terminal from '$lib/components/terminal.svelte';
	import TypeWrite from '$lib/components/type-write.svelte';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import Distributed from '$lib/svgs/distributed.svelte';
	import Earth from '$lib/svgs/earth.svelte';
	import Opensource from '$lib/svgs/opensource.svelte';
</script>

<div class="flex flex-col gap-20 mx-auto px-9 py-9 max-w-[1400px]">
	<div class="flex flex-col gap-12 lg:gap-3">
		<TypeWrite />
		<div class="max-w-lg flex flex-col justify-start gap-3">
			<span class="text-lg antialiased">
				OpenRegistry is an open source and decentralised container registry. Powered by Web3
				community, we have been able to build project you can rely on.
			</span>
			<a href="/get-started" class="flex gap-3 !text-primary-900-50-token">
				<span>View docs</span>
				<ArrowRight color="#" />
			</a>
		</div>
	</div>
	<div
		class="card p-20 flex flex-col lg:flex-row justify-between items-center gap-9 bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-800 dark:to-secondary-900 shadow"
	>
		<div class="flex flex-col gap-3 text-surface-900-50-token max-w-lg">
			<span class="text-3xl font-semibold antialiased">Hello There!!</span>
			<p class=" antialiased text-lg">
				Are you new to OpenRegistry or Container registries in general? Do you want to learn more
				about containers and container registries before proceeding with the documentaion?
			</p>

			<p class=" antialiased text-lg">
				We have the perfect starter documentation with cute little zines check them out
				<a href="/zines" class="!text-indigo-700 text-lg">here</a>
			</p>
		</div>
		<img src="/zine-docs.png" alt="zine docs" width="500px" />
	</div>
	<div class="flex flex-col lg:flex-row gap-3">
		<div
			class="card lg:w-1/3 bg-primary-100/60 dark:bg-surface-900/30 px-9 py-12 flex flex-col gap-9 items-start max-w-md shadow-lg"
		>
			<Opensource />
			<div class="flex flex-col gap-2">
				<span class="text-2xl font-semibold text-surface-900-50-token mt-3">Open Soure</span>
				<p>
					OpenRegistry is fully open source. Our codebase is public and uses MIT license. We are
					driven by open source community and this is our effort towards giving back.
				</p>
			</div>
		</div>
		<div
			class="card lg:w-1/3 bg-primary-100/60 dark:bg-surface-900/30 p-9 flex flex-col gap-9 items-start max-w-md shadow-lg text-surface-900-50-token"
		>
			<Distributed />
			<div class="flex flex-col gap-2">
				<span class="text-2xl font-semibold text-surface-900-50-token mt-3">Decentralised</span>
				<p>
					One of the most appealing feature of OpenRegistry is it's decentralised nature, and our
					collaborations with various Web3 projects like Akash, IPFS, Filebae, Storj and iExec are
					what make it possible.
				</p>
			</div>
		</div>
		<div
			class="card lg:w-1/3 bg-primary-100/60 dark:bg-surface-900/30 p-9 flex flex-col gap-9 items-start max-w-md shadow-lg"
		>
			<Earth />
			<div class="flex flex-col gap-2">
				<span class="text-2xl font-semibold text-surface-900-50-token mt-3"
					>Reliable and Available</span
				>
				<p>
					OpenRegistry is built on the foundation of OSS and Web3 communities. Our promise is to
					keep our system transparent while maintaining the best of our performance.
				</p>
			</div>
		</div>
	</div>

	<div
		class="card bg-gradient-to-br from-primary-500/50 to-tertiary-500/50 dark:from-primary-800/60 dark:to-tertiary-900/60 shadow p-20 flex flex-col
			lg:flex-row justify-between items-center gap-9 relative"
	>
		<div class="  flex flex-col gap-3 text-surface-900-50-token max-w-lg">
			<span class="text-3xl font-semibold antialiased">Get Started</span>
			<p class=" antialiased text-lg">
				Its super easy to get started with OpenRegistry. OpenRegistry is compliant with OCI
				confromance specification, which means the functionality and using CLI with OpenRegistry is
				just like any other container registry Explore documentation
			</p>
			<a href="/get-started" class="flex gap-3 !text-primary-900-50-token">
				<span>Explore Documentation</span>
				<ArrowRight />
			</a>
		</div>

		<Terminal />
	</div>

	<div
		class="bg-primary-100/60 dark:bg-surface-900 p-20 rounded flex flex-col lg:flex-row justify-between items-baseline gap-9"
	>
		<span class="text-3xl font-semibold antialiased"> A Humble Note </span>
		<div class="lg:w-1/2">
			<p class="text-lg antialiased">
				OpneRegistry is built and maintained by 2 developers. We are learning everyday and doing our
				best to make OpenRegistry the best container registry out there and we need your support in
				accomplishing it. If you spot a bug, typo or any other inconsistency across the platform and
				documentation, please report it in our github discussion or write to
			</p>
			<p class="text-lg antialiased">
				We welcome cunstructive criticism too, as it will help us become better. So don't hold back
				in any case. Lastly, thanks a lot for visiting, we hope you find this documentation
				informative.
			</p>
		</div>
	</div>
</div>
