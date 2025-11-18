<script lang="ts">
	import About from '$lib/widgets/About.svelte';
	import Skills from '$lib/widgets/Skills.svelte';
	import Experience from '$lib/widgets/Experience.svelte';
	import Projects from '$lib/widgets/Projects.svelte';
	import { FadeIn } from '$lib/shared/ui';
</script>

<svelte:head>
	<title>Ivan Jeržabek | Software engineer</title>
	<meta
		name="description"
		content="Software engineer doing Frontend and DevOps. MSc in Computing from University of Zagreb."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://jarza.cc" />
	<meta property="og:title" content="Ivan Jeržabek | Software Engineer" />
	<meta
		property="og:description"
		content="Software engineer doing Frontend and DevOps. MSc in Computing from University of Zagreb."
	/>
	<meta property="og:image" content="/images/headshot.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://jarza.cc" />
	<meta property="twitter:title" content="Ivan Jeržabek | Software Engineer" />
	<meta
		property="twitter:description"
		content="Software engineer doing Frontend and DevOps. MSc in Computing from University of Zagreb."
	/>
	<meta property="twitter:image" content="/images/headshot.webp" />
</svelte:head>

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
