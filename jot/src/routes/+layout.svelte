<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex h-full w-full flex-col items-start justify-start gap-4 p-4">
	<header class="h-10 w-full flex-1 bg-red-100">header</header>
	<main class="grow">
		{@render children()}
	</main>
	<footer class="h-10 w-full flex-0 bg-red-100">footer</footer>
</div>
