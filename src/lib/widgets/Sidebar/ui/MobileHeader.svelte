<script lang="ts">
	import { css } from 'styled-system/css';
	import { Button, ThemeToggle } from '$lib/shared/ui';
	import { onMount } from 'svelte';
	import { Spring } from 'svelte/motion';
	import { profile } from '../model';

	let isCompact = false;

	const imageOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const imageScale = new Spring(0.8, { stiffness: 0.05, damping: 0.6 });
	const nameOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const nameX = new Spring(-20, { stiffness: 0.05, damping: 0.6 });
	const buttonOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const buttonY = new Spring(20, { stiffness: 0.05, damping: 0.6 });
	const toggleOpacity = new Spring(0, { stiffness: 0.05, damping: 0.6 });
	const toggleScale = new Spring(0, { stiffness: 0.05, damping: 0.6 });

	const compactTitleOpacity = new Spring(1, { stiffness: 0.1, damping: 0.8 });
	const compactImageScale = new Spring(1, { stiffness: 0.1, damping: 0.8 });

	const SCROLL_THRESHOLD_DOWN = 240;
	const SCROLL_THRESHOLD_UP = 40;

	const handleScroll = () => {
		const scrollY = window.scrollY;

		const shouldBeCompact = isCompact
			? scrollY > SCROLL_THRESHOLD_UP
			: scrollY > SCROLL_THRESHOLD_DOWN;

		if (shouldBeCompact !== isCompact) {
			isCompact = shouldBeCompact;
			if (isCompact) {
				compactTitleOpacity.set(0);
				compactImageScale.set(0.5);
			} else {
				compactTitleOpacity.set(1);
				compactImageScale.set(1);
			}
		}
	};

	onMount(() => {
		setTimeout(() => {
			imageOpacity.set(1);
			imageScale.set(1);
		}, 0);

		setTimeout(() => {
			nameOpacity.set(1);
			nameX.set(0);
		}, 300);

		setTimeout(() => {
			buttonOpacity.set(1);
			buttonY.set(0);
		}, 700);

		setTimeout(() => {
			toggleOpacity.set(1);
			toggleScale.set(1);
		}, 900);

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class={css({
		hideFrom: 'md',
		position: 'sticky',
		top: '0',
		zIndex: 10
	})}
>
	<div
		class={css({
			position: 'relative',
			w: '100%',
			p: isCompact ? '2' : '4',
			display: 'flex',
			flexDirection: 'column',
			gap: isCompact ? '2' : '4',
			bg: 'surface',
			borderBottom: '1px solid',
			borderColor: 'border',
			boxShadow: 'sm',
			transitionProperty: 'all',
			transitionDuration: 'fastest',
			transitionTimingFunction: 'ease-out'
		})}
	>
		<div
			class={css({
				display: 'flex',
				flexDirection: 'row',
				gap: '4',
				alignItems: 'center',
				transitionProperty: 'all',
				transitionDuration: 'fastest',
				transitionTimingFunction: 'ease-out',
				h: { md: 'auto' }
			})}
		>
			<div
				class={css({
					aspectRatio: '1 / 1',
					borderRadius: 'lg',
					overflow: 'hidden',
					bg: 'surface.muted',
					transitionProperty: 'all',
					transitionDuration: 'fastest',
					transitionTimingFunction: 'ease-out'
				})}
				style="opacity: {imageOpacity.current * imageScale.current}; width: {80 *
					compactImageScale.current}px; height: {80 * compactImageScale.current}px;"
			>
				<img
					src={profile.image}
					alt={profile.name}
					class={css({ w: '100%', h: '100%', objectFit: 'cover' })}
				/>
			</div>

			<div
				class={css({
					display: 'flex',
					flexDirection: 'column',
					flex: '1'
				})}
				style="opacity: {nameOpacity.current}; transform: translateX({nameX.current}px);"
			>
				<h1
					class={css({
						fontSize: '2xl',
						fontWeight: 'bold',
						lineHeight: 'tight',
						color: 'text'
					})}
				>
					{profile.name}
				</h1>
				<div
					class={css({
						overflow: 'hidden',
						transitionProperty: 'all',
						transitionDuration: 'fast',
						transitionTimingFunction: 'ease-out'
					})}
					style="height: {compactTitleOpacity.current *
						60}px; opacity: {compactTitleOpacity.current};"
				>
					<p
						class={css({
							fontSize: 'sm',
							color: 'text.muted',
							mt: '1'
						})}
					>
						{profile.subtitle}
					</p>
					<p
						class={css({
							fontSize: 'sm',
							color: 'text.subtle',
							mt: '2'
						})}
					>
						{profile.title}
					</p>
				</div>
			</div>
		</div>

		<div
			class={css({
				position: 'absolute',
				top: '2',
				right: '4'
			})}
			style="opacity: {toggleOpacity.current}; transform: scale({toggleScale.current});"
		>
			<ThemeToggle />
		</div>

		<div
			class={css({
				transitionProperty: 'all',
				transitionDuration: 'fastest',
				transitionTimingFunction: 'ease-out'
			})}
			style="opacity: {buttonOpacity.current}; transform: translateY({buttonY.current}px);"
		>
			<Button variant="filled" href={`mailto:${profile.email}`}>Contact Me</Button>
		</div>
	</div>
</header>
