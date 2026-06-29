import { css } from 'styled-system/css';
import type { Experience as ExperienceEntry } from '@/lib/entities/project';
import { Section } from '@/lib/shared/ui';

const experiences: ExperienceEntry[] = [
	{
		company: 'Sofascore',
		image: '/images/sofascore.svg',
		position: 'Frontend Developer',
		period: 'Jul 2022 - Present',
		description:
			'Product development, internal tooling, DX improvements, DevOps education, React, Next.js, Typescript'
	},
	{
		company: 'Papar',
		image: '/images/papar.svg',
		position: 'Fullstack Developer',
		period: 'Aug 2020 - Oct 2022',
		description:
			'HGSPOT webshop development, e-commerce framework rewrite, product development, internal tooling, PHP, MySQL, Javascript'
	},
	{
		company: 'Freelance',
		position: 'Fullstack Developer',
		period: 'Jul 2018 - Oct 2019',
		description:
			'Student dorm administration software frontend development, introduction to React, Discord bot development managing 400 thousand users, Java, Reactor, MySQL, deployment on VPS'
	}
];

export default function Experience() {
	return (
		<Section title="Experience" id="experience">
			<div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
				{experiences.map((exp) => (
					<div
						key={exp.company}
						className={css({
							p: '6',
							bg: 'surface.muted',
							borderRadius: 'xl',
							display: 'flex',
							gap: '4',
							transition: 'all 0.2s',
							_hover: { bg: 'surface.subtle' }
						})}
					>
						<div
							className={css({
								w: '12',
								h: '12',
								p: '2',
								borderRadius: 'sm',
								bg: exp.image ? '#fff' : 'transparent',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: 'xl',
								color: 'text'
							})}
						>
							{exp.image && (
								// biome-ignore lint/performance/noImgElement: static export, next/image optimization is disabled
								<img
									src={exp.image}
									alt={exp.company}
									className={css({ w: '100%', h: '100%', objectFit: 'contain' })}
								/>
							)}
						</div>

						<div className={css({ flex: '1' })}>
							<div
								className={css({
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'start',
									mb: '2',
									flexWrap: 'wrap',
									gap: '2'
								})}
							>
								<div>
									<h3 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text' })}>
										{exp.company}
									</h3>
									<p className={css({ fontSize: 'sm', color: 'text.muted' })}>{exp.position}</p>
								</div>
								<span
									className={css({ fontSize: 'xs', color: 'text.subtle', whiteSpace: 'nowrap' })}
								>
									{exp.period}
								</span>
							</div>
							<p className={css({ color: 'text.muted', fontSize: 'sm', lineHeight: 'relaxed' })}>
								{exp.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}
