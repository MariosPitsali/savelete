<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex h-screen w-full flex-col items-start justify-start gap-4 p-4">
	<Header />
	<main class="w-full flex-1 overflow-auto">
		{@render children()}
	</main>
	<Footer />
</div>
