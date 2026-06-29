import Link from 'next/link';
import { css, cx } from 'styled-system/css';
import type { ProjectSummary } from '@/lib/entities/project';

export default function ProjectCard({ project }: { project: ProjectSummary }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={cx(
				'group',
				css({
					display: 'block',
					bg: 'surface.muted',
					borderRadius: 'xl',
					overflow: 'hidden',
					transition: 'all {durations.slow}',
					transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
					_hover: {
						bg: 'surface.subtle',
						transform: 'translateY(-8px)'
					}
				})
			)}
		>
			<div className={css({ w: '100%', h: '48', bg: 'border', overflow: 'hidden' })}>
				{/* biome-ignore lint/performance/noImgElement: static export, next/image optimization is disabled */}
				<img
					src={project.image}
					alt={project.title}
					className={css({
						w: '100%',
						h: '100%',
						objectFit: 'cover',
						transition: 'transform {durations.slow}',
						transitionTimingFunction: 'ease-out',
						_groupHover: {
							transform: 'scale(1.05)'
						}
					})}
				/>
			</div>
			<div className={css({ p: '5' })}>
				<h3 className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '2', color: 'text' })}>
					{project.title}
				</h3>
				<p className={css({ color: 'text.muted', lineHeight: 'relaxed', fontSize: 'sm' })}>
					{project.excerpt}
				</p>
			</div>
		</Link>
	);
}
