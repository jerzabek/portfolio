<script lang="ts">
	import { css } from 'styled-system/css';

	interface Props {
		title?: string;
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { title, id, children }: Props = $props();
</script>

<section {id} class={css({ py: '12', borderBottom: '1px solid', borderColor: 'border.muted' })}>
	{#if title}
		<h2
			class={css({
				fontSize: 'xs',
				fontWeight: 'bold',
				mb: '6',
				color: 'text.subtle',
				letterSpacing: 'wider',
				textTransform: 'uppercase'
			})}
		>
			{title}
		</h2>
	{/if}
	{@render children?.()}
</section>
