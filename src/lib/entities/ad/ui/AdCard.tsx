'use client';

import { useEffect, useRef } from 'react';
import { css, cx } from 'styled-system/css';
import {
	ADSENSE_CLIENT,
	ADSENSE_INFEED_LAYOUT_KEY,
	ADSENSE_INFEED_SLOT,
	adsenseConfigured
} from '@/lib/entities/ad/config';

// Wrapper matches ProjectCard so the ad sits flush in the feed.
const wrapper = css({
	display: 'block',
	bg: 'surface.muted',
	borderRadius: 'xl',
	overflow: 'hidden',
	h: '100%'
});

export default function AdCard() {
	// The <ins> AdSense renders into. Bound so we can guard against pushing twice.
	const insRef = useRef<HTMLModElement>(null);

	useEffect(() => {
		if (!adsenseConfigured || !insRef.current) {
			return;
		}
		// On client-side re-navigation the same element can persist; AdSense
		// throws if a slot already has a status. Push only once.
		if (insRef.current.getAttribute('data-adsbygoogle-status')) {
			return;
		}
		try {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		} catch (error) {
			console.error('adsbygoogle push failed', error);
		}
	}, []);

	if (adsenseConfigured) {
		return (
			<div className={wrapper}>
				<ins
					ref={insRef}
					className={cx('adsbygoogle', css({ display: 'block' }))}
					data-ad-format="fluid"
					data-ad-layout-key={ADSENSE_INFEED_LAYOUT_KEY}
					data-ad-client={ADSENSE_CLIENT}
					data-ad-slot={ADSENSE_INFEED_SLOT}
				/>
			</div>
		);
	}

	// Preview placeholder shown until the in-feed ad unit IDs are set in config.ts
	return (
		<div className={wrapper}>
			<div
				className={css({
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
					className={css({
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
				<span className={css({ fontSize: 'sm', color: 'text.subtle' })}>Ad preview</span>
			</div>
			<div className={css({ p: '5' })}>
				<h3 className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '2', color: 'text' })}>
					Your ad could be here
				</h3>
				<p className={css({ color: 'text.muted', lineHeight: 'relaxed', fontSize: 'sm' })}>
					This card becomes a live in-feed ad once the AdSense slot is configured.
				</p>
			</div>
		</div>
	);
}
