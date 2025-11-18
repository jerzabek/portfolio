<script lang="ts">
	import { css } from 'styled-system/css';
	import { Section } from '$lib/shared/ui';
</script>

<Section title="ABOUT" id="about">
	<div
		class={css({
			fontSize: 'base',
			lineHeight: 'relaxed',
			color: 'text.muted'
		})}
	>
		<p class={css({ mb: '4' })}>
			I am a Frontend Developer at Sofascore with a Master's degree in Computing from the University
			of Zagreb, Faculty of Electrical Engineering and Computing. I specialize in React and Next.js
			development for both product and internal applications.
		</p>
		<p class={css({ mb: '4' })}>
			With experience spanning fullstack development, e-commerce frameworks, and system
			administration software, I've worked with technologies including React, Next.js, TypeScript,
			Java, PHP, and various DevOps tools. I'm passionate about building efficient, user-friendly
			web applications.
		</p>
		<p class={css({ mb: '4' })}>
			Gold and silver medalist at 2019 INOVA Zagreb, ranked 4th place at WorldSkills Croatia 2019.
		</p>
	</div>
</Section>
