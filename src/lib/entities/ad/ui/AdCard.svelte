<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { css, cx } from 'styled-system/css';
	import {
		ADSENSE_CLIENT,
		ADSENSE_INFEED_SLOT,
		ADSENSE_INFEED_LAYOUT_KEY,
		adsenseConfigured
	} from '$lib/entities/ad/config';

	// The <ins> AdSense renders into. Bound so we can guard against pushing twice.
	let insEl = $state<HTMLModElement>();

	onMount(() => {
		if (!browser || !adsenseConfigured || !insEl) return;
		// On client-side re-navigation the same element can persist; AdSense
		// throws if a slot already has a status. Push only once.
		if (insEl.getAttribute('data-adsbygoogle-status')) return;
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (error) {
			console.error('adsbygoogle push failed', error);
		}
	});

	// Wrapper matches ProjectCard so the ad sits flush in the feed.
	const wrapper = css({
		display: 'block',
		bg: 'surface.muted',
		borderRadius: 'xl',
		overflow: 'hidden',
		h: '100%'
	});
</script>

{#if adsenseConfigured}
	<div class={wrapper}>
		<ins
			bind:this={insEl}
			class={cx('adsbygoogle', css({ display: 'block' }))}
			data-ad-format="fluid"
			data-ad-layout-key={ADSENSE_INFEED_LAYOUT_KEY}
			data-ad-client={ADSENSE_CLIENT}
			data-ad-slot={ADSENSE_INFEED_SLOT}
		></ins>
	</div>
{:else}
	<!-- Preview placeholder shown until the in-feed ad unit IDs are set in config.ts -->
	<div class={wrapper} aria-label="Advertisement">
		<div
			class={css({
				position: 'relative',
				w: '100%',
				h: '48',
				bgGradient: 'to-br',
				gradientFrom: 'surface.subtle',
				gradientTo: 'border',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			})}
		>
			<span
				class={css({
					position: 'absolute',
					top: '3',
					right: '3',
					fontSize: '2xs',
					fontWeight: 'semibold',
					letterSpacing: 'wider',
					textTransform: 'uppercase',
					color: 'text.subtle',
					bg: 'surface',
					px: '2',
					py: '0.5',
					borderRadius: 'md',
					opacity: 0.85
				})}
			>
				Sponsored
			</span>
			<span class={css({ fontSize: 'sm', color: 'text.subtle' })}>Ad preview</span>
		</div>
		<div class={css({ p: '5' })}>
			<h3 class={css({ fontSize: 'lg', fontWeight: 'bold', mb: '2', color: 'text' })}>
				Your ad could be here
			</h3>
			<p class={css({ color: 'text.muted', lineHeight: 'relaxed', fontSize: 'sm' })}>
				This card becomes a live in-feed ad once the AdSense slot is configured.
			</p>
		</div>
	</div>
{/if}
