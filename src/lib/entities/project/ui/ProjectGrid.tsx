'use client';

import { motion } from 'framer-motion';
import { css } from 'styled-system/css';
import { AdCard } from '@/lib/entities/ad';
import type { ProjectSummary } from '@/lib/entities/project';
import ProjectCard from './ProjectCard';

interface Props {
	projects: ProjectSummary[];
	/** 0-based grid position to insert an in-feed ad card. Omit to show no ad. */
	adIndex?: number;
}

type GridItem = { type: 'project'; project: ProjectSummary } | { type: 'ad' };

export default function ProjectGrid({ projects, adIndex }: Props) {
	const items: GridItem[] = projects.map((project) => ({ type: 'project', project }));
	if (typeof adIndex === 'number') {
		const pos = Math.max(0, Math.min(adIndex, items.length));
		items.splice(pos, 0, { type: 'ad' });
	}

	return (
		<div
			className={css({
				display: 'grid',
				gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
				gap: '4'
			})}
		>
			{items.map((item, i) => (
				<motion.div
					key={item.type === 'project' ? item.project.id : 'ad-card'}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ type: 'spring', stiffness: 50, damping: 14, delay: i * 0.15 }}
				>
					{item.type === 'project' ? <ProjectCard project={item.project} /> : <AdCard />}
				</motion.div>
			))}
		</div>
	);
}
