import Link from 'next/link';
import { Box, styled } from 'styled-system/jsx';
import type { ProjectSummary } from '@/lib/entities/project';

const CardLink = styled(Link);

export default function ProjectCard({ project }: { project: ProjectSummary }) {
	return (
		<CardLink
			href={`/projects/${project.slug}`}
			className="group"
			display="block"
			bg="surface.muted"
			borderRadius="xl"
			overflow="hidden"
			transition="all {durations.slow}"
			transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
			_hover={{ bg: 'surface.subtle', transform: 'translateY(-8px)' }}
		>
			<Box w="100%" h="48" bg="border" overflow="hidden">
				<styled.img
					src={project.image}
					alt={project.title}
					w="100%"
					h="100%"
					objectFit="cover"
					transition="transform {durations.slow}"
					transitionTimingFunction="ease-out"
					_groupHover={{ transform: 'scale(1.05)' }}
				/>
			</Box>
			<Box p="5">
				<styled.h3 fontSize="lg" fontWeight="bold" mb="2" color="text">
					{project.title}
				</styled.h3>
				<styled.p color="text.muted" lineHeight="relaxed" fontSize="sm">
					{project.excerpt}
				</styled.p>
			</Box>
		</CardLink>
	);
}
