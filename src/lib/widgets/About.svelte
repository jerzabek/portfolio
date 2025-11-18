<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
</script>

<Section title="About" id="about">
	<div
		class={css({
			display: 'flex',
			flexDirection: 'column',
			gap: '4',
			fontSize: 'base',
			lineHeight: 'relaxed',
			color: 'text.muted'
		})}
	>
		<p>
			I am a software engineer passionate about technology and doing it for the craft. I love diving
			into technical niches and solving complex problems. I live for the fact that elegance is
			accomplishing a complex task in a simple manner.
		</p>
		<p>
			I hold a master's degree from the University of Zagreb in the science of computing and have
			been working in the software industry since my late teens, showing interest in programming
			since the age of 12.
		</p>
		<p>
			Throughout both my professional, academic and personal projects I have worked on every aspect
			of software development. I focus on frontend development, with a strong interest in devops.
		</p>
	</div>
</Section>
