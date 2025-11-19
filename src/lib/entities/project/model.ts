import type { Project } from './types';
import PortfolioProjectsDescription from './ui/descriptions/PortfolioProjectsDescription.svelte';

export const projects: Project[] = [
	{
		id: '1',
		slug: 'portfolio',
		title: 'Portfolio Website',
		excerpt: 'Fun opportunity to try out SvelteKit and build a personal portfolio site.',
		image: 'https://picsum.photos/800/600?random=1',
		description: PortfolioProjectsDescription
	}
];

export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((p) => p.slug === slug);
};

export const getOtherProjects = (currentSlug: string): Project[] => {
	return projects.filter((p) => p.slug !== currentSlug);
};
