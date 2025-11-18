<script lang="ts">
	import { css } from 'styled-system/css';
	import type { Project } from '$lib/entities/project';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
	let isHovered = $state(false);
</script>

<a
	href={`/projects/${project.slug}`}
	class={css({
		display: 'block',
		bg: 'surface.muted',
		borderRadius: 'xl',
		overflow: 'hidden',
		transition: 'all {durations.slow}',
		transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
		_hover: {
			bg: 'surface.subtle',
			transform: 'translateY(-8px)'
		}
	})}
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	<div
		class={css({
			w: '100%',
			h: '48',
			bg: 'border',
			overflow: 'hidden'
		})}
	>
		<img
			src={project.image}
			alt={project.title}
			class={css({
				w: '100%',
				h: '100%',
				objectFit: 'cover',
				transition: 'transform {durations.slow}',
				transitionTimingFunction: 'ease-out',
				_hover: {
					transform: 'scale(1.05)'
				}
			})}
		/>
	</div>
	<div class={css({ p: '5' })}>
		<h3
			class={css({
				fontSize: 'lg',
				fontWeight: 'bold',
				mb: '2',
				color: 'text'
			})}
		>
			{project.title}
		</h3>
		<p
			class={css({
				color: 'text.muted',
				lineHeight: 'relaxed',
				fontSize: 'sm'
			})}
		>
			{project.excerpt}
		</p>
	</div>
</a>
