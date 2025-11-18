<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
	import type { Skill } from '$lib/entities/project';

	const skills: Skill[] = [
		{ name: 'HTML5/CSS3', category: 'frontend' },
		{ name: 'TypeScript', category: 'frontend' },
		{ name: 'JavaScript', category: 'frontend' },
		{ name: 'PHP', category: 'frontend' },
		{ name: 'React', category: 'frontend' },
		{ name: 'Next.js', category: 'frontend' },
		{ name: 'Bootstrap', category: 'frontend' },
		{ name: 'LESS', category: 'frontend' },
		{ name: 'Java', category: 'backend' },
		{ name: 'Spring Boot', category: 'backend' },
		{ name: 'MySQL', category: 'backend' },
		{ name: 'PostgreSQL', category: 'backend' },
		{ name: 'Linux', category: 'devops' },
		{ name: 'Docker', category: 'devops' },
		{ name: 'Docker Compose', category: 'devops' },
		{ name: 'Bash', category: 'tools' },
		{ name: 'Ruby on Rails', category: 'tools' },
		{ name: 'Python', category: 'tools' },
		{ name: 'Git', category: 'tools' }
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
