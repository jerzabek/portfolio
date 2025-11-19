<script lang="ts">
	import { Section } from '$lib/shared/ui';
	import { projects } from '$lib/entities/project';
	import { ProjectGrid } from '$lib/entities/project/ui';
</script>

<Section title="Projects" id="projects">
	<ProjectGrid {projects} />
</Section>
