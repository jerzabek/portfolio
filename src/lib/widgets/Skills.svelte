<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
	import type { Skill } from '$lib/entities/project';

	const skills: Skill[] = [
		{ name: 'React', category: 'frontend' },
		{ name: 'Svelte', category: 'frontend' },
		{ name: 'TypeScript', category: 'frontend' },
		{ name: 'Tailwind CSS', category: 'frontend' },
		{ name: 'Docker', category: 'devops' },
		{ name: 'Kubernetes', category: 'devops' },
		{ name: 'CI/CD', category: 'devops' },
		{ name: 'AWS', category: 'devops' },
		{ name: 'Node.js', category: 'backend' },
		{ name: 'PostgreSQL', category: 'backend' },
		{ name: 'Git', category: 'tools' },
		{ name: 'Linux', category: 'tools' }
	];

	const categories = {
		frontend: 'Frontend',
		backend: 'Backend',
		devops: 'DevOps',
		tools: 'Tools'
	};

	const categoryColors = {
		frontend: 'blue',
		backend: 'green',
		devops: 'purple',
		tools: 'orange'
	};
</script>

<Section title="SKILLS" id="skills">
	<div
		class={css({
			display: 'flex',
			flexWrap: 'wrap',
			gap: '3'
		})}
	>
		{#each skills as skill}
			<span
				class={css({
					px: '4',
					py: '2',
					bg: 'surface.muted',
					color: 'text',
					fontSize: 'sm',
					borderRadius: 'full',
					fontWeight: 'medium',
					transition: 'all 0.2s',
					_hover: {
						bg: 'surface.subtle'
					}
				})}
			>
				{skill.name}
			</span>
		{/each}
	</div>
</Section>
