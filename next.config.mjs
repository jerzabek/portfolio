/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export — equivalent to the previous SvelteKit adapter-static.
	output: 'export',
	// Image optimization requires a server, which a static export doesn't have.
	images: {
		unoptimized: true
	}
};

export default nextConfig;
