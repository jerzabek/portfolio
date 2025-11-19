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
	<title>{project.title} | By Ivan Jeržabek</title>
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

	<div class={css({})}>
		<div
			class={css({
				w: '100%',
				h: '96',
				mb: '12',
				overflow: 'hidden',
				borderRadius: 'xl',
				boxShadow: 'xl'
			})}
		>
			<img
				src={project.image}
				alt={project.title}
				class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
			/>
		</div>
	</div>

	<article class={css({ maxW: '4xl', mx: 'auto' })}>
		<h2
			class={css({
				fontSize: '4xl',
				fontWeight: 'bold',
				mb: '6',
				color: 'text'
			})}
		>
			{project.title}
		</h2>

		<div
			class={css({
				fontSize: 'lg',
				lineHeight: 'relaxed',
				color: 'text.muted',
				mb: '12'
			})}
		>
			<project.description />
		</div>
	</article>

	{#if typeof project.imageAttribution === 'string'}
		<div class={css({ width: '100%', textAlign: 'end' })}>
			<p
				class={css({
					color: 'text.subtle',
					fontSize: 'xs'
				})}
			>
				{project.imageAttribution}
			</p>
		</div>
	{/if}

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
