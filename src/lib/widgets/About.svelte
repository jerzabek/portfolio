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
			I am a passionate software engineer specializing in frontend development and DevOps practices.
			I love building beautiful, performant web applications and streamlining deployment processes.
		</p>
		<p class={css({ mb: '4' })}>
			With over 5 years of experience in creating visually stunning and user-centric websites, I've
			honed my skills in both front-end and back-end development.
		</p>
	</div>
</Section>
