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
		transition: 'all 0.2s',
		display: 'inline-block',
		textDecoration: 'none',
		border: '2px solid',
		fontSize: 'sm'
	});

	const filledStyles = css({
		bg: 'text',
		color: 'surface',
		borderColor: 'text',
		_hover: {
			opacity: 0.9
		}
	});

	const outlineStyles = css({
		bg: 'transparent',
		color: 'text',
		borderColor: 'text',
		_hover: {
			bg: 'surface.muted'
		}
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
