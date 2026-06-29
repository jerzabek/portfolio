import About from '@/lib/widgets/About';
import Experience from '@/lib/widgets/Experience';
import Projects from '@/lib/widgets/Projects';
import Skills from '@/lib/widgets/Skills';
import { FadeIn } from '@/lib/shared/ui';

const schema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Ivan Jeržabek',
	givenName: 'Ivan',
	familyName: 'Jeržabek',
	alternateName: 'Jarza',
	url: 'https://jarza.cc',
	image: 'https://jarza.cc/images/headshot.webp',
	jobTitle: 'Software Engineer',
	description:
		'Experienced Software Engineer specializing in **Frontend Development** and **DevOps**. Holds an **MSc in Computing** from the University of Zagreb. Proven track record at Sofascore and Papar.',
	knowsAbout: [
		'Frontend Development',
		'DevOps',
		'Software Engineering',
		'React',
		'TypeScript',
		'Cloud Infrastructure'
	],
	knowsLanguage: [
		{ '@type': 'Language', name: 'English', alternateName: 'en' },
		{ '@type': 'Language', name: 'Croatian', alternateName: 'hr' }
	],
	nationality: { '@type': 'Country', name: 'Croatia' },
	sameAs: [
		'https://linkedin.com/in/ivan-jerzabek-placeholder',
		'https://github.com/jarza-placeholder',
		'https://twitter.com/placeholder'
	],
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'professional inquiry',
		email: 'contact@jarza.cc-placeholder'
	},
	alumniOf: {
		'@type': 'EducationalOrganization',
		name: 'University of Zagreb',
		url: 'https://www.unizg.hr/',
		location: {
			'@type': 'Place',
			address: { '@type': 'PostalAddress', addressLocality: 'Zagreb', addressCountry: 'HR' }
		}
	},
	hasCredential: [
		{
			'@type': 'EducationalOccupationalCredential',
			credentialCategory: 'degree',
			name: 'Master of Science in Computing',
			educationalLevel: 'Master',
			recognizedBy: { '@type': 'EducationalOrganization', name: 'University of Zagreb' },
			startDate: '2013-10-01',
			endDate: '2018-09-30'
		}
	],
	hasOccupation: [
		{
			'@type': 'Occupation',
			name: 'Frontend Developer',
			description:
				'Building and maintaining high-traffic web applications with modern frontend frameworks.',
			responsibilities: ['Frontend Development', 'Performance Optimization']
		},
		{
			'@type': 'Occupation',
			name: 'Fullstack Developer',
			description:
				'Developing and scaling full-stack solutions including database management and API design.',
			responsibilities: ['Fullstack Development', 'API Design', 'Database Management']
		}
	],
	worksFor: [
		{
			'@type': 'Organization',
			name: 'Sofascore',
			url: 'https://www.sofascore.com/',
			startDate: '2020-01-01'
		},
		{
			'@type': 'Organization',
			name: 'Papar',
			url: 'https://papar.hr/',
			startDate: '2018-10-01',
			endDate: '2019-12-31'
		}
	]
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD structured data
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			<FadeIn delay={0}>
				<About />
			</FadeIn>

			<FadeIn delay={0.1}>
				<Skills />
			</FadeIn>

			<FadeIn delay={0.1}>
				<Experience />
			</FadeIn>

			<FadeIn delay={0.1}>
				<Projects />
			</FadeIn>
		</>
	);
}
