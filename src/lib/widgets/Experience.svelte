<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
	import type { Experience } from '$lib/entities/project';

	const experiences: Experience[] = [
		{
			company: 'Sofascore',
			image: '/images/sofascore.svg',
			position: 'Frontend Developer',
			period: 'Jul 2022 - Present',
			description:
				'Product development, internal tooling, DX improvements, DevOps education, React, Next.js, Typescript'
		},
		{
			company: 'Papar',
			image: '/images/papar.svg',
			position: 'Fullstack Developer',
			period: 'Aug 2020 - Oct 2022',
			description:
				'HGSPOT webshop development, e-commerce framework rewrite, product development, internal tooling, PHP, MySQL, Javascript'
		},
		{
			company: 'Freelance',
			position: 'Fullstack Developer',
			period: 'Jul 2018 - Oct 2019',
			description:
				'Student dorm administration software frontend development, introduction to React, Discord bot development managing 400 thousand users, Java, Reactor, MySQL, deployment on VPS'
		}
	];
</script>

<Section title="Experience" id="experience">
	<div class={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
		{#each experiences as exp}
			<div
				class={css({
					p: '6',
					bg: 'surface.muted',
					borderRadius: 'xl',
					display: 'flex',
					gap: '4',
					transition: 'all 0.2s',
					_hover: {
						bg: 'surface.subtle'
					}
				})}
			>
				<div
					class={css({
						w: '12',
						h: '12',
						p: '2',
						borderRadius: 'sm',
						bg: exp.image ? '#fff' : 'transparent',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 'xl',
						color: 'text'
					})}
				>
					{#if exp.image}
						<img
							src={exp.image}
							alt={exp.company}
							class={css({ w: '100%', h: '100%', objectFit: 'contain' })}
						/>
					{/if}
				</div>

				<div class={css({ flex: '1' })}>
					<div
						class={css({
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'start',
							mb: '2',
							flexWrap: 'wrap',
							gap: '2'
						})}
					>
						<div>
							<h3 class={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text' })}>
								{exp.company}
							</h3>
							<p class={css({ fontSize: 'sm', color: 'text.muted' })}>
								{exp.position}
							</p>
						</div>
						<span
							class={css({
								fontSize: 'xs',
								color: 'text.subtle',
								whiteSpace: 'nowrap'
							})}
						>
							{exp.period}
						</span>
					</div>
					<p class={css({ color: 'text.muted', fontSize: 'sm', lineHeight: 'relaxed' })}>
						{exp.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</Section>
