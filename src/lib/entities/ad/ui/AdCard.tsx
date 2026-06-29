'use client';

import { useEffect, useRef } from 'react';
import { Box, styled } from 'styled-system/jsx';
import {
	ADSENSE_CLIENT,
	ADSENSE_INFEED_LAYOUT_KEY,
	ADSENSE_INFEED_SLOT,
	adsenseConfigured
} from '@/lib/entities/ad/config';

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
			<Box display="block" bg="surface.muted" borderRadius="xl" overflow="hidden" h="100%">
				<styled.ins
					ref={insRef}
					className="adsbygoogle"
					display="block"
					data-ad-format="fluid"
					data-ad-layout-key={ADSENSE_INFEED_LAYOUT_KEY}
					data-ad-client={ADSENSE_CLIENT}
					data-ad-slot={ADSENSE_INFEED_SLOT}
				/>
			</Box>
		);
	}

	// Preview placeholder shown until the in-feed ad unit IDs are set in config.ts
	return (
		<Box display="block" bg="surface.muted" borderRadius="xl" overflow="hidden" h="100%">
			<Box
				position="relative"
				w="100%"
				h="48"
				bgGradient="to-br"
				gradientFrom="surface.subtle"
				gradientTo="border"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<styled.span
					position="absolute"
					top="3"
					right="3"
					fontSize="2xs"
					fontWeight="semibold"
					letterSpacing="wider"
					textTransform="uppercase"
					color="text.subtle"
					bg="surface"
					px="2"
					py="0.5"
					borderRadius="md"
					opacity={0.85}
				>
					Sponsored
				</styled.span>
				<styled.span fontSize="sm" color="text.subtle">
					Ad preview
				</styled.span>
			</Box>
			<Box p="5">
				<styled.h3 fontSize="lg" fontWeight="bold" mb="2" color="text">
					Your ad could be here
				</styled.h3>
				<styled.p color="text.muted" lineHeight="relaxed" fontSize="sm">
					This card becomes a live in-feed ad once the AdSense slot is configured.
				</styled.p>
			</Box>
		</Box>
	);
}
