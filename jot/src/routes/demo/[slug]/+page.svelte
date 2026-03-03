<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.title}</span>
		</li>
	{/each}
</ul>
