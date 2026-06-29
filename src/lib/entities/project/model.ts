import type { Project, ProjectSummary } from './types';
import PortfolioProjectsDescription from './ui/descriptions/PortfolioProjectsDescription';
import VpsProjectsDescription from './ui/descriptions/VpsProjectsDescription';

export const projects: Project[] = [
	{
		id: '1',
		slug: 'portfolio',
		title: 'Portfolio Website',
		excerpt: 'Fun opportunity to try out SvelteKit and build a personal portfolio site.',
		image: '/images/projects/portfolio-cover.webp',
		imageAttribution:
			'Cover photo by Matheus Bertelli: https://www.pexels.com/photo/photo-of-a-man-holding-video-camera-2608519/',
		description: PortfolioProjectsDescription
	},
	{
		id: '2',
		slug: 'vps',
		title: 'Managing a VPS',
		excerpt: 'Self hosting various services on a VPS.',
		image: '/images/projects/vps-cover.webp',
		imageAttribution:
			'Cover photo by Vladimir Srajber: https://www.pexels.com/photo/close-up-of-a-bunch-of-cables-plugged-into-a-device-13963756/',
		description: VpsProjectsDescription
	}
];

const toSummary = ({ id, slug, title, excerpt, image }: Project): ProjectSummary => ({
	id,
	slug,
	title,
	excerpt,
	image
});

export const getProjectBySlug = (slug: string): Project | undefined => {
	return projects.find((p) => p.slug === slug);
};

export const getProjectSummaries = (): ProjectSummary[] => projects.map(toSummary);

export const getOtherProjectSummaries = (currentSlug: string): ProjectSummary[] =>
	projects.filter((p) => p.slug !== currentSlug).map(toSummary);
