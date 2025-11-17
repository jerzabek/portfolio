<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';

	const techStack = [
		{ name: 'Next.js', icon: '▲' },
		{ name: 'Svelte', icon: '🔥' },
		{ name: 'TypeScript', icon: 'TS' },
		{ name: 'Figma', icon: '●' },
		{ name: 'Docker', icon: '🐳' },
		{ name: 'AWS', icon: '☁️' }
	];
</script>

<Section title="TECH STACK" id="tech-stack">
	<div
		class={css({
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
			gap: '4'
		})}
	>
		{#each techStack as tech}
			<div
				class={css({
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '2',
					p: '4',
					bg: 'surface.muted',
					borderRadius: 'xl',
					transition: 'all 0.2s',
					_hover: {
						bg: 'surface.subtle',
						transform: 'translateY(-2px)'
					}
				})}
			>
				<div
					class={css({
						fontSize: '2xl',
						w: '12',
						h: '12',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						bg: 'surface',
						borderRadius: 'lg'
					})}
				>
					{tech.icon}
				</div>
				<span class={css({ fontSize: 'xs', color: 'text.muted', textAlign: 'center' })}>
					{tech.name}
				</span>
			</div>
		{/each}
	</div>
</Section>
