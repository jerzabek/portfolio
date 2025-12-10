import { projects } from '$lib/entities/project';

const base = 'https://jarza.cc';

export const prerender = true;

export const GET = async () => {
	const staticPages = [''];

	const projectPages = projects.map((p) => `projects/${p.slug}`);
	const allPages = [...staticPages, ...projectPages];

	const urls = allPages.map((page) => `<url><loc>${base}/${page}</loc></url>`).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
      ${urls}
    </urlset>`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
