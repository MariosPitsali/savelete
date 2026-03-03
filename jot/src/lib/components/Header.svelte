<script lang="ts">
	import Button from './ui/button/button.svelte';

	const { headerText = 'User', showButton = true } = $props();
	let count = $state(0);

	const onclick = () => (count += 1);
</script>

<header class="flex h-10 w-full shrink-0 items-center justify-between bg-red-100 p-4 text-2xl">
	Hello {headerText}
	{count}
	{#if showButton}
		<Button {onclick}>Click me</Button>
	{/if}
</header>
