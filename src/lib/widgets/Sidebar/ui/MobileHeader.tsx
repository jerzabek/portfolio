'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Box, Flex, styled } from 'styled-system/jsx';
import { Button, ThemeToggle } from '@/lib/shared/ui';
import { profile } from '../model';

const spring = { type: 'spring', stiffness: 45, damping: 14 } as const;
const compactSpring = { type: 'spring', stiffness: 200, damping: 26 } as const;

const SCROLL_THRESHOLD_DOWN = 240;
const SCROLL_THRESHOLD_UP = 40;

export default function MobileHeader() {
	const [isCompact, setIsCompact] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsCompact((prev) =>
				prev ? scrollY > SCROLL_THRESHOLD_UP : scrollY > SCROLL_THRESHOLD_DOWN
			);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<styled.header hideFrom="md" position="sticky" top="0" zIndex="10">
			<Flex
				direction="column"
				position="relative"
				w="100%"
				p={isCompact ? '2' : '4'}
				gap={isCompact ? '2' : '4'}
				bg="surface"
				borderBottom="1px solid"
				borderColor="border"
				boxShadow="sm"
				transitionProperty="all"
				transitionDuration="fastest"
				transitionTimingFunction="ease-out"
			>
				<Flex direction="row" gap="4" align="center">
					<motion.div
						initial={{ opacity: 0, width: 80, height: 80 }}
						animate={{ opacity: 1, width: isCompact ? 40 : 80, height: isCompact ? 40 : 80 }}
						transition={compactSpring}
					>
						<Box
							aspectRatio="1 / 1"
							borderRadius="lg"
							overflow="hidden"
							bg="surface.muted"
							w="100%"
							h="100%"
						>
							<styled.img
								src={profile.image}
								alt={profile.name}
								w="100%"
								h="100%"
								objectFit="cover"
							/>
						</Box>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ...spring, delay: 0.3 }}
						style={{ flex: 1 }}
					>
						<Flex direction="column">
							<styled.h1 fontSize="2xl" fontWeight="bold" lineHeight="tight" color="text">
								{profile.name}
							</styled.h1>
							<motion.div
								animate={{ height: isCompact ? 0 : 60, opacity: isCompact ? 0 : 1 }}
								transition={compactSpring}
								style={{ overflow: 'hidden' }}
							>
								<styled.p fontSize="sm" color="text.muted" mt="1">
									{profile.subtitle}
								</styled.p>
								<styled.p fontSize="sm" color="text.subtle" mt="2">
									{profile.title}
								</styled.p>
							</motion.div>
						</Flex>
					</motion.div>
				</Flex>

				<Box position="absolute" top="2" right="4">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ...spring, delay: 0.9 }}
					>
						<ThemeToggle />
					</motion.div>
				</Box>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...spring, delay: 0.7 }}
				>
					<Button variant="filled" href={`mailto:${profile.email}`}>
						Contact Me
					</Button>
				</motion.div>
			</Flex>
		</styled.header>
	);
}
