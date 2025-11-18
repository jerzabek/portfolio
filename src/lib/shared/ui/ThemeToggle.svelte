<script lang="ts">
	import { css } from 'styled-system/css';
	import { theme, toggleTheme } from '$lib/shared/stores/theme';
	import Icon from '@iconify/svelte';
</script>

<button
	onclick={toggleTheme}
	class={css({
		w: '10',
		h: '10',
		borderRadius: 'full',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		bg: 'surface.muted',
		border: 'none',
		cursor: 'pointer',
		fontSize: 'lg',
		transition: 'all {durations.normal}',
		color: { base: 'yellow.600', _dark: 'yellow.400' },
		_hover: {
			bg: 'surface.subtle',
			transform: 'scale(1.1)'
		}
	})}
	aria-label="Toggle theme"
>
	{#if $theme === 'light'}
		<Icon icon="mdi:weather-night" width="24" height="24" />
	{:else}
		<Icon icon="mdi:weather-sunny" width="24" height="24" />
	{/if}
</button>
