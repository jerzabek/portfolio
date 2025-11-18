<script lang="ts">
	import { css } from 'styled-system/css';

	interface Props {
		variant?: 'filled' | 'outline';
		href?: string;
		type?: 'button' | 'submit';
		onclick?: () => void;
		children?: import('svelte').Snippet;
	}

	let { variant = 'filled', href, type = 'button', onclick, children }: Props = $props();

	const baseStyles = css({
		px: '6',
		py: '3',
		borderRadius: 'md',
		fontWeight: 'medium',
		cursor: 'pointer',
		display: 'inline-block',
		textDecoration: 'none',
		border: '2px solid',
		fontSize: 'sm',
		w: '100%',
		textAlign: 'center',
		transition: 'all {durations.normal}',
		_hover: {
			transform: 'scale(1.02)'
		},
		_active: {
			transform: 'scale(0.98)'
		}
	});

	const filledStyles = css({
		bg: 'text',
		color: 'surface',
		borderColor: 'text'
	});

	const outlineStyles = css({
		bg: 'transparent',
		color: 'text',
		borderColor: 'text'
	});

	const buttonClass = `${baseStyles} ${variant === 'filled' ? filledStyles : outlineStyles}`;
</script>

{#if href}
	<a {href} class={buttonClass}>
		{@render children?.()}
	</a>
{:else}
	<button {type} {onclick} class={buttonClass}>
		{@render children?.()}
	</button>
{/if}
