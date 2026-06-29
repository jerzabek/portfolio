<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Project } from '$lib/entities/project';
	import ProjectCard from './ProjectCard.svelte';
	import { AdCard } from '$lib/entities/ad';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	interface Props {
		projects: Project[];
		/** 0-based grid position to insert an in-feed ad card. Omit to show no ad. */
		adIndex?: number;
	}

	let { projects, adIndex }: Props = $props();

	type GridItem = { type: 'project'; project: Project } | { type: 'ad' };

	// Build the rendered item list once, inserting the ad at the requested slot.
	const items: GridItem[] = (() => {
		const list: GridItem[] = projects.map((project) => ({ type: 'project', project }));
		if (typeof adIndex === 'number') {
			const pos = Math.max(0, Math.min(adIndex, list.length));
			list.splice(pos, 0, { type: 'ad' });
		}
		return list;
	})();

	interface CardState {
		opacity: Spring<number>;
		y: Spring<number>;
	}

	let cardStates: CardState[] = items.map(() => ({
		opacity: new Spring(0, { stiffness: 0.05, damping: 0.6 }),
		y: new Spring(30, { stiffness: 0.05, damping: 0.6 })
	}));

	onMount(() => {
		items.forEach((_, i) => {
			setTimeout(() => {
				cardStates[i].opacity.set(1);
				cardStates[i].y.set(0);
			}, i * 150);
		});
	});
</script>

<div
	class={css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
		gap: '4'
	})}
>
	{#each items as item, i}
		<div
			style="opacity: {cardStates[i].opacity.current}; transform: translateY({cardStates[i].y
				.current}px);"
		>
			{#if item.type === 'project'}
				<ProjectCard project={item.project} />
			{:else}
				<AdCard />
			{/if}
		</div>
	{/each}
</div>
