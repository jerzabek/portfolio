'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { css } from 'styled-system/css';
import { Button, ThemeToggle } from '@/lib/shared/ui';
import { profile } from '../model';

const spring = { type: 'spring', stiffness: 45, damping: 14 } as const;

export default function DesktopSidebar() {
	return (
		<div
			className={css({
				hideBelow: 'md',
				position: 'sticky',
				top: '0',
				height: '100vh',
				maxHeight: '100vh',
				display: 'flex',
				alignItems: 'center'
			})}
		>
			<aside
				className={css({
					position: 'relative',
					w: '100%',
					h: 'fit-content',
					p: '8',
					display: 'flex',
					flexDirection: 'column',
					gap: '8',
					bg: 'surface',
					borderRadius: '2xl',
					boxShadow: 'lg'
				})}
			>
				<div className={css({ display: 'flex', flexDirection: 'column', gap: '8' })}>
					<motion.div
						className={css({
							w: '100%',
							aspectRatio: '1 / 1',
							borderRadius: 'xl',
							overflow: 'hidden',
							bg: 'surface.muted'
						})}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ ...spring, delay: 0 }}
					>
						{/* biome-ignore lint/performance/noImgElement: static export, next/image optimization is disabled */}
						<img
							src={profile.image}
							alt={profile.name}
							className={css({ w: '100%', h: '100%', objectFit: 'cover' })}
						/>
					</motion.div>

					<motion.div
						className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ...spring, delay: 0.3 }}
					>
						<h1
							className={css({
								fontSize: '3xl',
								fontWeight: 'bold',
								lineHeight: 'tight',
								color: 'text'
							})}
						>
							Hello, I am <br />
							{profile.name}
						</h1>
						<p className={css({ fontSize: 'sm', color: 'text.muted', mt: '1' })}>
							{profile.subtitle}
						</p>
						<p className={css({ fontSize: 'sm', color: 'text.subtle', mt: '2' })}>
							{profile.title}
						</p>
					</motion.div>
				</div>

				<motion.div
					className={css({ position: 'absolute', top: '-12', right: '0' })}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ ...spring, delay: 0.9 }}
				>
					<ThemeToggle />
				</motion.div>

				<motion.div
					className={css({
						display: 'flex',
						flexDirection: 'column',
						gap: '3',
						fontSize: 'sm',
						color: 'text'
					})}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...spring, delay: 0.5 }}
				>
					<div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
						<Icon icon="mdi:location-outline" width={20} height={20} />
						<span>{profile.location}</span>
					</div>

					<div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
						<Icon icon="mdi:github" width={20} height={20} />
						<a
							href={`https://${profile.github}`}
							className={css({ color: 'text.link', textDecoration: 'underline' })}
							target="_blank"
							rel="noopener noreferrer"
						>
							{profile.github}
						</a>
					</div>

					<div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
						<Icon icon="mdi:email-outline" width={20} height={20} />
						<span>{profile.email}</span>
					</div>
				</motion.div>

				<motion.div
					className={css({ mt: 'auto' })}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ...spring, delay: 0.7 }}
				>
					<Button variant="filled" href={`mailto:${profile.email}`}>
						Contact Me
					</Button>
				</motion.div>
			</aside>
		</div>
	);
}
