import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { Box, Container, styled } from 'styled-system/jsx';
import { ThemeProvider } from '@/lib/shared/theme';
import { CustomCursor } from '@/lib/shared/ui';
import { Sidebar } from '@/lib/widgets/Sidebar';
import './globals.css';

// Runs before paint so the saved/system theme is applied without a flash.
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export const metadata: Metadata = {
	metadataBase: new URL('https://jarza.cc'),
	title: {
		default: 'Ivan Jeržabek | Software engineer',
		template: '%s | By Ivan Jeržabek'
	},
	description:
		'Software engineer doing Frontend and DevOps. MSc in Computing from University of Zagreb.',
	openGraph: {
		type: 'website',
		url: 'https://jarza.cc',
		title: 'Ivan Jeržabek | Software engineer',
		description:
			'Software engineer doing Frontend and DevOps. MSc in Computing from University of Zagreb.',
		images: ['/images/headshot.webp']
	},
	twitter: {
		card: 'summary_large_image',
		images: ['/images/headshot.webp']
	}
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static no-FOUC theme bootstrap */}
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<Script
					id="adsbygoogle-init"
					strategy="afterInteractive"
					crossOrigin="anonymous"
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7131271092857002"
				/>

				<ThemeProvider>
					<CustomCursor />

					<Box bg="bg" minH="100vh">
						<Container px="0">
							<Box display="grid" gridTemplateColumns={{ base: '1fr', md: '1fr 3fr' }} minH="100vh">
								<Sidebar />
								<styled.main
									maxW="100%"
									px={{ base: '6', md: '12' }}
									py="12"
									overflowY="auto"
									bg="bg"
								>
									<Box maxW="7xl" mx="auto">
										{children}
									</Box>
								</styled.main>
							</Box>
						</Container>
					</Box>
				</ThemeProvider>
			</body>
		</html>
	);
}
