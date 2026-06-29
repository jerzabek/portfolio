'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { css } from 'styled-system/css';
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
		<header className={css({ hideFrom: 'md', position: 'sticky', top: '0', zIndex: 10 })}>
			<div
				className={css({
					position: 'relative',
					w: '100%',
					p: isCompact ? '2' : '4',
					display: 'flex',
					flexDirection: 'column',
					gap: isCompact ? '2' : '4',
					bg: 'surface',
					borderBottom: '1px solid',
					borderColor: 'border',
					boxShadow: 'sm',
					transitionProperty: 'all',
					transitionDuration: 'fastest',
					transitionTimingFunction: 'ease-out'
				})}
			>
				<div
					className={css({ display: 'flex', flexDirection: 'row', gap: '4', alignItems: 'center' })}
				>
					<motion.div
						className={css({
							aspectRatio: '1 / 1',
							borderRadius: 'lg',
							overflow: 'hidden',
							bg: 'surface.muted',
							flexShrink: 0
						})}
						initial={{ opacity: 0, width: 80, height: 80 }}
						animate={{ opacity: 1, width: isCompact ? 40 : 80, height: isCompact ? 40 : 80 }}
						transition={compactSpring}
					>
						{/* biome-ignore lint/performance/noImgElement: static export, next/image optimization is disabled */}
						<img
							src={profile.image}
							alt={profile.name}
							className={css({ w: '100%', h: '100%', objectFit: 'cover' })}
						/>
					</motion.div>

					<motion.div
						className={css({ display: 'flex', flexDirection: 'column', flex: '1' })}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ...spring, delay: 0.3 }}
					>
						<h1
							className={css({
								fontSize: '2xl',
								fontWeight: 'bold',
								lineHeight: 'tight',
								color: 'text'
							})}
						>
							{profile.name}
						</h1>
						<motion.div
							className={css({ overflow: 'hidden' })}
							animate={{ height: isCompact ? 0 : 60, opacity: isCompact ? 0 : 1 }}
							transition={compactSpring}
						>
							<p className={css({ fontSize: 'sm', color: 'text.muted', mt: '1' })}>
								{profile.subtitle}
							</p>
							<p className={css({ fontSize: 'sm', color: 'text.subtle', mt: '2' })}>
								{profile.title}
							</p>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					className={css({ position: 'absolute', top: '2', right: '4' })}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ ...spring, delay: 0.9 }}
				>
					<ThemeToggle />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...spring, delay: 0.7 }}
				>
					<Button variant="filled" href={`mailto:${profile.email}`}>
						Contact Me
					</Button>
				</motion.div>
			</div>
		</header>
	);
}
