<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to home page for 404 errors (undefined paths)
		if ($page.status === 404) {
			goto('/', { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>Page Not Found | Ivan Jeržabek</title>
</svelte:head>

<div>
	{#if $page.status === 404}
		<p>Redirecting to home page...</p>
	{:else}
		<h1>{$page.status}: {$page.error?.message}</h1>
	{/if}
</div>
