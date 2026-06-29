import type { MetadataRoute } from 'next';
import { projects } from '@/lib/entities/project';

const base = 'https://jarza.cc';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	return [{ url: base }, ...projects.map((p) => ({ url: `${base}/projects/${p.slug}` }))];
}
