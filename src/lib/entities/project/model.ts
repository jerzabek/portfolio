import type { Project } from './types';
import PortfolioProjectsDescription from './ui/descriptions/PortfolioProjectsDescription.svelte';

export const projects: Project[] = [
	{
		id: '1',
		slug: 'portfolio',
		title: 'Portfolio Website',
		excerpt: 'Fun opportunity to try out SvelteKit and build a personal portfolio site.',
		image: '/images/projects/portfolio-cover.webp',
		imageAttribution:
			'Photo by Matheus Bertelli: https://www.pexels.com/photo/photo-of-a-man-holding-video-camera-2608519/',
		description: PortfolioProjectsDescription
	}
];

export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((p) => p.slug === slug);
};

export const getOtherProjects = (currentSlug: string): Project[] => {
	return projects.filter((p) => p.slug !== currentSlug);
};
