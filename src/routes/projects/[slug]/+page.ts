import { error } from '@sveltejs/kit';
import { getProjectBySlug, projects } from '$lib/entities/project';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
};

export function entries() {
	return projects.map((project) => ({
		slug: project.slug
	}));
}
