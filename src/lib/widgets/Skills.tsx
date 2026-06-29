import { css } from 'styled-system/css';
import type { Skill } from '@/lib/entities/project';
import { Section } from '@/lib/shared/ui';

const skills: Skill[] = [
	{ name: 'HTML5/CSS3', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'JavaScript', category: 'frontend' },
	{ name: 'PHP', category: 'frontend' },
	{ name: 'React', category: 'frontend' },
	{ name: 'Next.js', category: 'frontend' },
	{ name: 'Java', category: 'backend' },
	{ name: 'MySQL', category: 'backend' },
	{ name: 'PostgreSQL', category: 'backend' },
	{ name: 'Linux', category: 'devops' },
	{ name: 'Docker', category: 'devops' },
	{ name: 'Shell terminal', category: 'tools' },
	{ name: 'Python', category: 'tools' },
	{ name: 'Git', category: 'tools' }
];

export default function Skills() {
	return (
		<Section title="Skills" id="skills">
			<div className={css({ display: 'flex', flexWrap: 'wrap', gap: '3' })}>
				{skills.map((skill) => (
					<span
						key={skill.name}
						className={css({
							px: '4',
							py: '2',
							bg: 'surface.muted',
							color: 'text',
							fontSize: 'sm',
							borderRadius: 'full',
							fontWeight: 'medium',
							transition: 'all 0.2s',
							_hover: { bg: 'surface.subtle' }
						})}
					>
						{skill.name}
					</span>
				))}
			</div>
		</Section>
	);
}
