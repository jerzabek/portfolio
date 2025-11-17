<script lang="ts">
	import { css } from 'styled-system/css';
	import { theme, toggleTheme } from '$lib/shared/stores/theme';
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
		transition: 'all 0.2s',
		_hover: {
			bg: 'surface.subtle',
			transform: 'scale(1.1)'
		}
	})}
	aria-label="Toggle theme"
>
	{#if $theme === 'light'}
		🌙
	{:else}
		☀️
	{/if}
</button>
