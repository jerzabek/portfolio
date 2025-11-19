import type { Component } from 'svelte';

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
	slug: string;
	description: Component;
}

export interface Skill {
	name: string;
	category: 'frontend' | 'backend' | 'devops' | 'tools';
}
