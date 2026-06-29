import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { css } from 'styled-system/css';
import { getOtherProjectSummaries, getProjectBySlug, projects } from '@/lib/entities/project';
import { ProjectGrid } from '@/lib/entities/project/ui';

interface PageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {};
	}

	const pageTitle = `${project.title} | By Ivan Jeržabek`;
	const url = `https://jarza.cc/projects/${project.slug}`;

	return {
		title: project.title,
		description: project.excerpt,
		openGraph: {
			type: 'website',
			url,
			title: pageTitle,
			description: project.excerpt,
			images: ['/images/headshot.webp']
		},
		twitter: {
			card: 'summary_large_image',
			title: pageTitle,
			description: project.excerpt,
			images: ['/images/headshot.webp']
		}
	};
}

export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const otherProjects = getOtherProjectSummaries(project.slug);
	const Description = project.description;

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: project.title,
		name: project.title,
		description: project.excerpt,
		image: {
			'@type': 'ImageObject',
			url: `https://jarza.cc${project.image}`,
			width: 1200,
			height: 630
		},
		url: `https://jarza.cc/projects/${project.slug}`,
		datePublished: '2025-12-01',
		dateModified: '2025-12-01',
		author: {
			'@type': 'Person',
			name: 'Ivan Jeržabek',
			givenName: 'Ivan',
			familyName: 'Jeržabek',
			url: 'https://jarza.cc',
			jobTitle: 'Software Engineer',
			image: 'https://jarza.cc/images/headshot.webp'
		},
		publisher: { '@type': 'Person', name: 'Ivan Jeržabek', url: 'https://jarza.cc' },
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://jarza.cc/projects/${project.slug}`
		},
		keywords: ['Software Engineering', 'Web Development', 'Portfolio Project'],
		articleSection: 'Technology',
		inLanguage: 'en',
		isPartOf: { '@type': 'WebSite', name: 'Ivan Jeržabek Portfolio', url: 'https://jarza.cc' }
	};

	return (
		<div className={css({ maxW: '6xl', mx: 'auto', py: '6' })}>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<Link
				href="/#projects"
				className={css({
					display: 'inline-flex',
					alignItems: 'center',
					gap: '2',
					color: 'text.muted',
					mb: '8',
					_hover: { color: 'text' },
					transition: 'color 0.2s'
				})}
			>
				← Back to home
			</Link>

			<div>
				<div
					className={css({
						w: '100%',
						h: '96',
						mb: '12',
						overflow: 'hidden',
						borderRadius: 'xl',
						boxShadow: 'xl'
					})}
				>
					{/* biome-ignore lint/performance/noImgElement: static export, next/image optimization is disabled */}
					<img
						src={project.image}
						alt={project.title}
						className={css({ w: '100%', h: '100%', objectFit: 'cover' })}
					/>
				</div>
			</div>

			<article className={css({ maxW: '4xl', mx: 'auto' })}>
				<h2 className={css({ fontSize: '4xl', fontWeight: 'bold', mb: '6', color: 'text' })}>
					{project.title}
				</h2>

				<div
					className={css({ fontSize: 'lg', lineHeight: 'relaxed', color: 'text.muted', mb: '12' })}
				>
					<Description />
				</div>
			</article>

			{typeof project.imageAttribution === 'string' && (
				<div className={css({ width: '100%', textAlign: 'end' })}>
					<p className={css({ color: 'text.subtle', fontSize: 'xs' })}>
						{project.imageAttribution}
					</p>
				</div>
			)}

			{otherProjects.length > 0 && (
				<div className={css({ mt: '20', pt: '12', borderTop: '1px solid {colors.border}' })}>
					<h2
						className={css({
							fontSize: '2xl',
							fontWeight: 'bold',
							mb: '8',
							textAlign: 'center',
							color: 'text'
						})}
					>
						Other Projects
					</h2>

					<ProjectGrid projects={otherProjects} adIndex={otherProjects.length} />
				</div>
			)}
		</div>
	);
}
