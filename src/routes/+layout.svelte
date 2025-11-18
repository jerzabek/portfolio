<script lang="ts">
	import '../app.css';
	import { css } from 'styled-system/css';
	import { container } from 'styled-system/patterns';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/widgets/Sidebar.svelte';
	import { CustomCursor } from '$lib/shared/ui';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<CustomCursor />

<div class={css({ bg: 'bg', minH: '100vh' })}>
	<div class={container({ px: '0' })}>
		<div
			class={css({
				display: 'grid',
				gridTemplateColumns: { base: '1fr', md: '1fr 3fr' },
				minH: '100vh'
			})}
		>
			<Sidebar />
			<main
				class={css({
					maxW: '100%',
					px: { base: '6', md: '12' },
					py: '12',
					overflowY: 'auto',
					bg: 'bg'
				})}
			>
				<div class={css({ maxW: '7xl', mx: 'auto' })}>
					{@render children()}
				</div>
			</main>
		</div>
	</div>
</div>
