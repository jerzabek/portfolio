<script lang="ts">
	import { css } from 'styled-system/css';
	import { Button, ThemeToggle } from '$lib/shared/ui';

	// TODO: Replace with your actual data
	const profile = {
		image: 'https://placehold.co/400x400/e0e0e0/333?text=Photo',
		name: 'Your Name',
		title: 'Software Engineer',
		subtitle: 'Frontend & DevOps',
		location: 'Your City, Country',
		website: 'yourwebsite.com',
		phone: '+123-456-7890',
		email: 'your.email@example.com',
		available: true
	};
</script>

<aside
	class={css({
		w: '100%',
		h: '100vh',
		position: 'sticky',
		top: 0,
		p: '12',
		display: 'flex',
		flexDirection: 'column',
		gap: '8',
		bg: 'surface'
	})}
>
	<!-- Theme Toggle in top right -->
	<div class={css({ position: 'absolute', top: '4', right: '4' })}>
		<ThemeToggle />
	</div>

	<!-- Profile Image -->
	<div
		class={css({
			w: '40',
			h: '40',
			borderRadius: '2xl',
			overflow: 'hidden',
			bg: 'surface.muted'
		})}
	>
		<img
			src={profile.image}
			alt={profile.name}
			class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
		/>
	</div>

	<!-- Name and Title -->
	<div class={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
		<h1
			class={css({
				fontSize: '2xl',
				fontWeight: 'bold',
				lineHeight: 'tight',
				color: 'text'
			})}
		>
			Hello I'm<br />{profile.name}
		</h1>
		<p class={css({ fontSize: 'sm', color: 'text.muted', mt: '2' })}>
			{profile.title}
		</p>
	</div>

	<!-- Info List -->
	<div
		class={css({
			display: 'flex',
			flexDirection: 'column',
			gap: '3',
			fontSize: 'sm',
			color: 'text'
		})}
	>
		{#if profile.available}
			<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				<span class={css({ color: 'text.subtle' })}>●</span>
				<span>Available for work</span>
			</div>
		{/if}

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>📍</span>
			<span>{profile.location}</span>
		</div>

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>🌐</span>
			<span>{profile.website}</span>
		</div>

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>📞</span>
			<span>{profile.phone}</span>
		</div>

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>✉️</span>
			<span>{profile.email}</span>
		</div>
	</div>

	<!-- Action Buttons -->
	<div class={css({ display: 'flex', flexDirection: 'column', gap: '3', mt: 'auto' })}>
		<Button variant="filled">Download CV</Button>
		<Button variant="outline" href={`mailto:${profile.email}`}>Contact Me</Button>
	</div>
</aside>
