<script lang="ts">
	import { css } from 'styled-system/css';
	import { getOtherProjects } from '$lib/entities/project';
	import { ProjectGrid } from '$lib/entities/project/ui';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { project } = data;
	const otherProjects = getOtherProjects(project.slug);
</script>

<svelte:head>
	<title>{project.title} | Portfolio</title>
</svelte:head>

<div class={css({ maxW: '6xl', mx: 'auto', px: '6', py: '12' })}>
	<a
		href="/#projects"
		class={css({
			display: 'inline-flex',
			alignItems: 'center',
			gap: '2',
			color: 'text.muted',
			mb: '8',
			_hover: { color: 'text' },
			transition: 'color 0.2s'
		})}
	>
		← Back to home
	</a>

	<div
		class={css({
			w: '100%',
			h: '96',
			borderRadius: 'xl',
			overflow: 'hidden',
			mb: '12',
			boxShadow: 'xl'
		})}
	>
		<img
			src={project.image}
			alt={project.title}
			class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
		/>
	</div>

	<div class={css({ maxW: '4xl', mx: 'auto' })}>
		<h1
			class={css({
				fontSize: '4xl',
				fontWeight: 'bold',
				mb: '6',
				color: 'text'
			})}
		>
			{project.title}
		</h1>

		{#if project.technologies}
			<div
				class={css({
					display: 'flex',
					flexWrap: 'wrap',
					gap: '2',
					mb: '8'
				})}
			>
				{#each project.technologies as tech}
					<span
						class={css({
							px: '3',
							py: '1',
							bg: 'surface.muted',
							color: 'text',
							fontSize: 'sm',
							borderRadius: 'full',
							fontWeight: 'medium'
						})}
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		<div
			class={css({
				fontSize: 'lg',
				lineHeight: 'relaxed',
				color: 'text.muted',
				mb: '12'
			})}
		>
			<p>{project.description || project.excerpt}</p>
		</div>
	</div>

	{#if otherProjects.length > 0}
		<div
			class={css({
				mt: '20',
				pt: '12',
				borderTop: '1px solid',
				borderColor: 'border.muted'
			})}
		>
			<h2
				class={css({
					fontSize: '2xl',
					fontWeight: 'bold',
					mb: '8',
					textAlign: 'center',
					color: 'text'
				})}
			>
				Other Projects
			</h2>

			<ProjectGrid projects={otherProjects} />
		</div>
	{/if}
</div>
