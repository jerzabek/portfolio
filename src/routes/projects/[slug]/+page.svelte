<script lang="ts">
	import { css } from 'styled-system/css';
	import { getOtherProjects } from '$lib/entities/project';
	import { ProjectGrid } from '$lib/entities/project/ui';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
	const otherProjects = $derived(getOtherProjects(project.slug));
	const pageTitle = $derived(`${project.title} | By Ivan Jeržabek`);

	const schema = $derived({
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
		publisher: {
			'@type': 'Person',
			name: 'Ivan Jeržabek',
			url: 'https://jarza.cc'
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://jarza.cc/projects/${project.slug}`
		},
		keywords: ['Software Engineering', 'Web Development', 'Portfolio Project'],
		articleSection: 'Technology',
		inLanguage: 'en',
		isPartOf: {
			'@type': 'WebSite',
			name: 'Ivan Jeržabek Portfolio',
			url: 'https://jarza.cc'
		}
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={project.excerpt} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://jarza.cc/projects/${project.slug}`} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={project.excerpt} />
	<meta property="og:image" content="/images/headshot.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={`https://jarza.cc/projects/${project.slug}`} />
	<meta property="twitter:title" content={pageTitle} />
	<meta property="twitter:description" content={project.excerpt} />
	<meta property="twitter:image" content="/images/headshot.webp" />

	<!-- Schema.org structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<div class={css({ maxW: '6xl', mx: 'auto', py: '6' })}>
	<a
		href="/#projects"
		class={css({
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
	</a>

	<div class={css({})}>
		<div
			class={css({
				w: '100%',
				h: '96',
				mb: '12',
				overflow: 'hidden',
				borderRadius: 'xl',
				boxShadow: 'xl'
			})}
		>
			<img
				src={project.image}
				alt={project.title}
				class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
			/>
		</div>
	</div>

	<article class={css({ maxW: '4xl', mx: 'auto' })}>
		<h2
			class={css({
				fontSize: '4xl',
				fontWeight: 'bold',
				mb: '6',
				color: 'text'
			})}
		>
			{project.title}
		</h2>

		<div
			class={css({
				fontSize: 'lg',
				lineHeight: 'relaxed',
				color: 'text.muted',
				mb: '12'
			})}
		>
			<project.description />
		</div>
	</article>

	{#if typeof project.imageAttribution === 'string'}
		<div class={css({ width: '100%', textAlign: 'end' })}>
			<p
				class={css({
					color: 'text.subtle',
					fontSize: 'xs'
				})}
			>
				{project.imageAttribution}
			</p>
		</div>
	{/if}

	{#if otherProjects.length > 0}
		<div
			class={css({
				mt: '20',
				pt: '12',
				borderTop: '1px solid {colors.border}'
			})}
		>
			<h2
				class={css({
					fontSize: '2xl',
					fontWeight: 'bold',
					mb: '8',
					textAlign: 'center',
					color: 'text'
				})}
			>
				Other Projects
			</h2>

			<ProjectGrid projects={otherProjects} />
		</div>
	{/if}
</div>
