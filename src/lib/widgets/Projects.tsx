import { getProjectSummaries } from '@/lib/entities/project';
import { ProjectGrid } from '@/lib/entities/project/ui';
import { Section } from '@/lib/shared/ui';

export default function Projects() {
	const summaries = getProjectSummaries();

	return (
		<Section title="Projects" id="projects">
			<ProjectGrid projects={summaries} adIndex={summaries.length} />
		</Section>
	);
}
