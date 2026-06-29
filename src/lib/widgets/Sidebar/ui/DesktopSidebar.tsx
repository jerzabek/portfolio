'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Box, Flex, styled } from 'styled-system/jsx';
import { Button, ThemeToggle } from '@/lib/shared/ui';
import { profile } from '../model';

const spring = { type: 'spring', stiffness: 45, damping: 14 } as const;

export default function DesktopSidebar() {
	return (
		<Flex hideBelow="md" position="sticky" top="0" height="100vh" maxHeight="100vh" align="center">
			<styled.aside
				position="relative"
				w="100%"
				h="fit-content"
				p="8"
				display="flex"
				flexDirection="column"
				gap="8"
				bg="surface"
				borderRadius="2xl"
				boxShadow="lg"
			>
				<Flex direction="column" gap="8">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ...spring, delay: 0 }}
					>
						<Box
							w="100%"
							aspectRatio="1 / 1"
							borderRadius="xl"
							overflow="hidden"
							bg="surface.muted"
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
					>
						<Flex direction="column" gap="1">
							<styled.h1 fontSize="3xl" fontWeight="bold" lineHeight="tight" color="text">
								Hello, I am <br />
								{profile.name}
							</styled.h1>
							<styled.p fontSize="sm" color="text.muted" mt="1">
								{profile.subtitle}
							</styled.p>
							<styled.p fontSize="sm" color="text.subtle" mt="2">
								{profile.title}
							</styled.p>
						</Flex>
					</motion.div>
				</Flex>

				<Box position="absolute" top="-12" right="0">
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
					transition={{ ...spring, delay: 0.5 }}
				>
					<Flex direction="column" gap="3" fontSize="sm" color="text">
						<Flex align="center" gap="2">
							<Icon icon="mdi:location-outline" width={20} height={20} />
							<span>{profile.location}</span>
						</Flex>

						<Flex align="center" gap="2">
							<Icon icon="mdi:github" width={20} height={20} />
							<styled.a
								href={`https://${profile.github}`}
								color="text.link"
								textDecoration="underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{profile.github}
							</styled.a>
						</Flex>

						<Flex align="center" gap="2">
							<Icon icon="mdi:email-outline" width={20} height={20} />
							<span>{profile.email}</span>
						</Flex>
					</Flex>
				</motion.div>

				<Box mt="auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...spring, delay: 0.7 }}
					>
						<Button variant="filled" href={`mailto:${profile.email}`}>
							Contact Me
						</Button>
					</motion.div>
				</Box>
			</styled.aside>
		</Flex>
	);
}
