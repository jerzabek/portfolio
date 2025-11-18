<script lang="ts">
	import { css } from 'styled-system/css';
	import { Button, ThemeToggle } from '$lib/shared/ui';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';

	const profile = {
		image: '/images/headshot.webp',
		name: 'Ivan Jeržabek',
		title: 'Frontend Developer',
		subtitle: 'univ. mag. ing. comp.',
		location: 'Zagreb, Croatia',
		website: 'github.com/jerzabek',
		email: 'jerzabek.ivan@gmail.com'
	};

	// Animation stores
	const toggleOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const toggleScale = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const imageOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const imageScale = new Spring(0.8, { stiffness: 0.05, damping: 0.6 });
	const nameOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const nameX = new Spring(-20, { stiffness: 0.05, damping: 0.6 });
	const infoOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const infoY = new Spring(20, { stiffness: 0.05, damping: 0.6 });
	const buttonOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const buttonY = new Spring(20, { stiffness: 0.05, damping: 0.6 });

	onMount(() => {
		// Stagger the animations
		setTimeout(() => {
			imageOpacity.set(1);
			imageScale.set(1);
		}, 0);

		setTimeout(() => {
			nameOpacity.set(1);
			nameX.set(0);
		}, 300);

		setTimeout(() => {
			infoOpacity.set(1);
			infoY.set(0);
		}, 500);

		setTimeout(() => {
			buttonOpacity.set(1);
			buttonY.set(0);
		}, 700);

		setTimeout(() => {
			toggleOpacity.set(1);
			toggleScale.set(1);
		}, 900);
	});
</script>

<aside
	class={css({
		w: '100%',
		h: { base: 'auto', lg: '100vh' },
		position: { base: 'relative', lg: 'sticky' },
		top: 0,
		pt: { base: '6', lg: '14' },
		pb: { base: '6', lg: '12' },
		px: { base: '6', lg: '12' },
		display: 'flex',
		flexDirection: 'column',
		gap: { base: '6', lg: '8' },
		bg: 'surface',
		borderBottom: { base: '1px solid', lg: 'none' },
		borderColor: 'border'
	})}
>
	<!-- Theme Toggle in top right -->
	<div
		class={css({ position: 'absolute', top: '4', right: '4' })}
		style="opacity: {toggleOpacity.current}; transform: scale({toggleScale.current});"
	>
		<ThemeToggle />
	</div>

	<!-- Mobile: Image and Name side by side, Desktop: Stack vertically -->
	<div
		class={css({
			display: 'flex',
			flexDirection: { base: 'row', lg: 'column' },
			gap: { base: '4', lg: '8' },
			alignItems: { base: 'center', lg: 'flex-start' }
		})}
	>
		<!-- Profile Image -->
		<div
			class={css({
				w: { base: '20', lg: '100%' },
				h: { base: '20', lg: 'auto' },
				minW: { base: '20', lg: 'auto' },
				aspectRatio: { base: 'auto', lg: '1 / 1' },
				borderRadius: '2xl',
				overflow: 'hidden',
				bg: 'surface.muted'
			})}
			style="opacity: {imageOpacity.current}; transform: scale({imageScale.current});"
		>
			<img
				src={profile.image}
				alt={profile.name}
				class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
			/>
		</div>

		<!-- Name and Title -->
		<div
			class={css({
				display: 'flex',
				flexDirection: 'column',
				gap: '1',
				flex: { base: '1', lg: 'initial' }
			})}
			style="opacity: {nameOpacity.current}; transform: translateX({nameX.current}px);"
		>
			<h1
				class={css({
					fontSize: { base: 'lg', lg: '2xl' },
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
	</div>

	<!-- Info List -->
	<div
		class={css({
			display: { base: 'none', lg: 'flex' },
			flexDirection: 'column',
			gap: '3',
			fontSize: 'sm',
			color: 'text'
		})}
		style="opacity: {infoOpacity.current}; transform: translateY({infoY.current}px);"
	>
		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>📍</span>
			<span>{profile.location}</span>
		</div>

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>🌐</span>
			<span>{profile.website}</span>
		</div>

		<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
			<span class={css({ color: 'text.subtle' })}>✉️</span>
			<span>{profile.email}</span>
		</div>
	</div>

	<!-- Action Buttons -->
	<div
		class={css({
			mt: { base: '0', lg: 'auto' }
		})}
		style="opacity: {buttonOpacity.current}; transform: translateY({buttonY.current}px);"
	>
		<Button variant="filled" href={`mailto:${profile.email}`}>Contact Me</Button>
	</div>
</aside>
