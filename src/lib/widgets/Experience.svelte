<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
	import type { Experience } from '$lib/entities/project';

	const experiences: Experience[] = [
		{
			id: '1',
			company: 'Tech Company Inc.',
			position: 'Senior Frontend Developer',
			period: '2022 - Present',
			description:
				'Leading frontend development initiatives, mentoring junior developers, and implementing modern web technologies to improve user experience and application performance.'
		},
		{
			id: '2',
			company: 'StartUp Solutions',
			position: 'Full Stack Developer',
			period: '2020 - 2022',
			description:
				'Developed and maintained multiple web applications using React and Node.js. Implemented CI/CD pipelines and containerized applications using Docker.'
		},
		{
			id: '3',
			company: 'Digital Agency',
			position: 'Frontend Developer',
			period: '2018 - 2020',
			description:
				'Built responsive websites and web applications for various clients. Collaborated with designers and backend developers to deliver high-quality products.'
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
