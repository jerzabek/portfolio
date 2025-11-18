<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Project } from '$lib/entities/project';
	import ProjectCard from './ProjectCard.svelte';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();

	interface CardState {
		opacity: Spring<number>;
		y: Spring<number>;
	}

	let cardStates: CardState[] = projects.map(() => ({
		opacity: new Spring(0, { stiffness: 0.05, damping: 0.6 }),
		y: new Spring(30, { stiffness: 0.05, damping: 0.6 })
	}));

	onMount(() => {
		// Trigger animations
		projects.forEach((_, i) => {
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
		gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
		gap: '4'
	})}
>
	{#each projects as project, i}
		<div
			style="opacity: {cardStates[i].opacity.current}; transform: translateY({cardStates[i].y
				.current}px);"
		>
			<ProjectCard {project} />
		</div>
	{/each}
</div>
