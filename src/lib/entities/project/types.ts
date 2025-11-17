// Types for portfolio data
export interface Experience {
	id: string;
	company: string;
	position: string;
	period: string;
	description: string;
}

export interface Project {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	slug: string;
	description?: string;
	technologies?: string[];
}

export interface Skill {
	name: string;
	category: 'frontend' | 'backend' | 'devops' | 'tools';
}
