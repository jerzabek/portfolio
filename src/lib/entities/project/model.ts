import type { Project } from './types';

// Sample projects data - replace with your actual projects
export const projects: Project[] = [
	{
		id: '1',
		slug: 'project-one',
		title: 'Project One',
		excerpt: 'A brief description of what this project does and the problem it solves.',
		image: 'https://picsum.photos/800/600?random=1',
		description:
			'Detailed description of the project, the challenges faced, and the solutions implemented.',
		technologies: ['SvelteKit', 'TypeScript', 'Panda CSS']
	},
	{
		id: '2',
		slug: 'project-two',
		title: 'Project Two',
		excerpt: 'Another amazing project showcasing different skills and technologies.',
		image: 'https://picsum.photos/800/600?random=2',
		description: 'Full project story with implementation details and results achieved.',
		technologies: ['Docker', 'Node.js', 'PostgreSQL']
	},
	{
		id: '3',
		slug: 'project-three',
		title: 'Project Three',
		excerpt: 'An innovative solution to a common problem in the industry.',
		image: 'https://picsum.photos/800/600?random=3',
		description: 'Complete overview of the project from conception to deployment.',
		technologies: ['React', 'AWS', 'CI/CD']
	}
];

export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((p) => p.slug === slug);
};

export const getOtherProjects = (currentSlug: string): Project[] => {
	return projects.filter((p) => p.slug !== currentSlug);
};
