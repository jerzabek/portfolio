<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Project } from '$lib/entities/project';
	import ProjectCard from './ProjectCard.svelte';

	interface Props {
		projects: Project[];
	}

	let { projects }: Props = $props();
</script>

<div
	class={css({
		display: 'grid',
		gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
		gap: '4'
	})}
>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>
