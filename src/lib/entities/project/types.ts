import type { ComponentType } from 'react';

export interface Experience {
	company: string;
	image?: string;
	position: string;
	period: string;
	description: string;
}

export interface Project {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	imageAttribution?: string;
	slug: string;
	description: ComponentType;
}

/**
 * Serializable subset of a Project — everything the cards need, without the
 * `description` component. Safe to pass from Server to Client Components.
 */
export type ProjectSummary = Pick<Project, 'id' | 'slug' | 'title' | 'excerpt' | 'image'>;

export interface Skill {
	name: string;
	category: 'frontend' | 'backend' | 'devops' | 'tools';
}
