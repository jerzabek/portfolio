<script lang="ts">
	import { css } from 'styled-system/css';
	import { Button, ThemeToggle } from '$lib/shared/ui';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';
	import Icon from '@iconify/svelte';

	const profile = {
		image: '/images/headshot.webp',
		name: 'Ivan Jeržabek',
		title: 'Software engineer',
		subtitle: 'univ. mag. ing. comp.',
		location: 'Zagreb, Croatia',
		github: 'github.com/jerzabek',
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

<div
	class={css({
		position: { base: 'relative', md: 'sticky' },
		top: { md: '0' },
		h: { md: '100vh' },
		display: 'flex',
		alignItems: { md: 'center' }
	})}
>
	<aside
		class={css({
			position: 'relative',
			w: '100%',
			h: { md: 'fit-content' },
			p: { base: '4', md: '8' },
			display: 'flex',
			flexDirection: 'column',
			gap: { base: '6', md: '8' },
			bg: 'surface',
			borderBottom: { base: '1px solid', md: 'none' },
			borderColor: 'border',
			borderRadius: { md: '2xl' },
			boxShadow: { base: 'sm', md: 'lg' }
		})}
	>
		<div
			class={css({ position: 'absolute', top: '-12', right: '0' })}
			style="opacity: {toggleOpacity.current}; transform: scale({toggleScale.current});"
		>
			<ThemeToggle />
		</div>

		<div
			class={css({
				display: 'flex',
				flexDirection: { base: 'row', md: 'column' },
				gap: { base: '4', md: '8' },
				alignItems: { base: 'center', md: 'flex-start' }
			})}
		>
			<div
				class={css({
					w: { base: '20', md: '100%' },
					h: { base: '20', md: 'auto' },
					minW: { base: '20', md: 'auto' },
					aspectRatio: '1 / 1',
					borderRadius: { base: 'lg', md: 'xl' },
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
					flex: { base: '1', md: 'initial' }
				})}
				style="opacity: {nameOpacity.current}; transform: translateX({nameX.current}px);"
			>
				<h1
					class={css({
						fontSize: { base: '2xl', md: '3xl' },
						fontWeight: 'bold',
						lineHeight: 'tight',
						color: 'text'
					})}
				>
					Hello, I am <br class={css({ hideBelow: 'md' })} />{profile.name}
				</h1>
				<p class={css({ fontSize: 'sm', color: 'text.muted' })}>
					{profile.subtitle}
				</p>
				<p class={css({ fontSize: 'sm', color: 'text.subtle', mt: '2' })}>
					{profile.title}
				</p>
			</div>
		</div>

		<!-- Info List -->
		<div
			class={css({
				display: { base: 'none', md: 'flex' },
				flexDirection: 'column',
				gap: '3',
				fontSize: 'sm',
				color: 'text'
			})}
			style="opacity: {infoOpacity.current}; transform: translateY({infoY.current}px);"
		>
			<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				<Icon icon="mdi:location-outline" width="20" height="20" color="currentColor" />

				<span>{profile.location}</span>
			</div>

			<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				<Icon icon="mdi:github" width="20" height="20" color="currentColor" />

				<a
					href={`https://${profile.github}`}
					class={css({ color: 'text.link', textDecoration: 'underline' })}
					target="_blank"
					rel="noopener noreferrer">{profile.github}</a
				>
			</div>

			<div class={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
				<Icon icon="mdi:email-outline" width="20" height="20" color="currentColor" />

				<span>{profile.email}</span>
			</div>
		</div>

		<!-- Action Buttons -->
		<div
			class={css({
				mt: { base: '0', md: 'auto' }
			})}
			style="opacity: {buttonOpacity.current}; transform: translateY({buttonY.current}px);"
		>
			<Button variant="filled" href={`mailto:${profile.email}`}>Contact Me</Button>
		</div>
	</aside>
</div>
