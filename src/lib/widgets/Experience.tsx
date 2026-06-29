import { Box, Flex, styled } from 'styled-system/jsx';
import type { Experience as ExperienceEntry } from '@/lib/entities/project';
import { Section } from '@/lib/shared/ui';

const experiences: ExperienceEntry[] = [
	{
		company: 'Sofascore',
		image: '/images/sofascore.svg',
		position: 'Frontend Developer',
		period: 'Jul 2022 - Present',
		description:
			'Product development, internal tooling, DX improvements, DevOps education, React, Next.js, Typescript'
	},
	{
		company: 'Papar',
		image: '/images/papar.svg',
		position: 'Fullstack Developer',
		period: 'Aug 2020 - Oct 2022',
		description:
			'HGSPOT webshop development, e-commerce framework rewrite, product development, internal tooling, PHP, MySQL, Javascript'
	},
	{
		company: 'Freelance',
		position: 'Fullstack Developer',
		period: 'Jul 2018 - Oct 2019',
		description:
			'Student dorm administration software frontend development, introduction to React, Discord bot development managing 400 thousand users, Java, Reactor, MySQL, deployment on VPS'
	}
];

export default function Experience() {
	return (
		<Section title="Experience" id="experience">
			<Flex direction="column" gap="4">
				{experiences.map((exp) => (
					<Flex
						key={exp.company}
						p="6"
						bg="surface.muted"
						borderRadius="xl"
						gap="4"
						transition="all 0.2s"
						_hover={{ bg: 'surface.subtle' }}
					>
						<Flex
							w="12"
							h="12"
							p="2"
							borderRadius="sm"
							bg={exp.image ? '#fff' : 'transparent'}
							align="center"
							justify="center"
							fontSize="xl"
							color="text"
						>
							{exp.image && (
								<styled.img
									src={exp.image}
									alt={exp.company}
									w="100%"
									h="100%"
									objectFit="contain"
								/>
							)}
						</Flex>

						<Box flex="1">
							<Flex justify="space-between" align="start" mb="2" wrap="wrap" gap="2">
								<Box>
									<styled.h3 fontSize="lg" fontWeight="bold" color="text">
										{exp.company}
									</styled.h3>
									<styled.p fontSize="sm" color="text.muted">
										{exp.position}
									</styled.p>
								</Box>
								<styled.span fontSize="xs" color="text.subtle" whiteSpace="nowrap">
									{exp.period}
								</styled.span>
							</Flex>
							<styled.p color="text.muted" fontSize="sm" lineHeight="relaxed">
								{exp.description}
							</styled.p>
						</Box>
					</Flex>
				))}
			</Flex>
		</Section>
	);
}
