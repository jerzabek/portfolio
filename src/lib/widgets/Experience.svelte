<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
	import type { Experience } from '$lib/entities/project';

	const experiences: Experience[] = [
		{
			id: '1',
			company: 'Sofascore',
			position: 'Frontend Developer',
			period: 'Jul 2022 - Present',
			description: 'React & NextJS used in product development as well as internal applications'
		},
		{
			id: '2',
			company: 'Papar',
			position: 'Fullstack Developer',
			period: 'Aug 2020 - Oct 2022',
			description:
				'HGSPOT webshop development. Comprehensive e-commerce framework rewrite in PHP. Product development and internal company tool development'
		},
		{
			id: '3',
			company: 'Freelance',
			position: 'Fullstack Developer',
			period: 'Jul 2018 - Oct 2019',
			description:
				'ReactJS front-end for student dorm administration software. Back-end software in Java, Reactor, MySQL deployed on remote VPS'
		}
	];
</script>

<Section title="EXPERIENCE" id="experience">
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
				<!-- Icon/Logo placeholder -->
				<div
					class={css({
						w: '12',
						h: '12',
						minW: '12',
						borderRadius: 'lg',
						bg: 'surface',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 'xl',
						color: 'text'
					})}
				>
					{exp.company.charAt(0)}
				</div>

				<!-- Content -->
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
