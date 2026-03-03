<script lang="ts">
	const { copyrightText, year = 2026 } = $props();
</script>

<footer class="flex h-20 w-full shrink-0 items-center justify-start bg-red-100 p-4 text-2xl">
	{copyrightText}
	{year}
</footer>
