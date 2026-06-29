'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// The /projects index has no content of its own — mirror the old SvelteKit
// redirect to the home page. Static export has no server redirects, so this
// runs on the client.
export default function ProjectsIndexRedirect() {
	const router = useRouter();

	useEffect(() => {
		router.replace('/');
	}, [router]);

	return null;
}
