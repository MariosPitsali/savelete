<script lang="ts">
	import { resolve } from '$app/paths';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/Card/index.js';
</script>

<Card class="w-full">
	<CardHeader>
		<CardTitle>Demo</CardTitle>
	</CardHeader>
	<CardContent>
		<a href={resolve('/demo/better-auth')}>better-auth</a>
	</CardContent>
</Card>
