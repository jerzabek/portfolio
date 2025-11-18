<script lang="ts">
	import { onMount } from 'svelte';
	import { css } from 'styled-system/css';

	let cursorX = $state(0);
	let cursorY = $state(0);
	let trailX = $state(0);
	let trailY = $state(0);

	onMount(() => {
		const handleMouseMove = (e: MouseEvent) => {
			cursorX = e.clientX;
			cursorY = e.clientY;
		};

		// Smooth trailing animation
		let animationFrame: number;
		const animate = () => {
			const dx = cursorX - trailX;
			const dy = cursorY - trailY;

			trailX += dx * 0.15;
			trailY += dy * 0.15;

			animationFrame = requestAnimationFrame(animate);
		};

		window.addEventListener('mousemove', handleMouseMove);
		animationFrame = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<svelte:head>
	<style>
		* {
			cursor: none !important;
		}
	</style>
</svelte:head>

<!-- Small dot at cursor position -->
<div
	class={css({
		position: 'fixed',
		width: '8px',
		height: '8px',
		borderRadius: 'full',
		bg: 'text',
		pointerEvents: 'none',
		zIndex: 9999,
		mixBlendMode: 'difference'
	})}
	style="left: {cursorX}px; top: {cursorY}px; transform: translate(-50%, -50%);"
></div>

<!-- Trailing circle -->
<div
	class={css({
		position: 'fixed',
		width: '40px',
		height: '40px',
		border: '2px solid',
		borderColor: 'text',
		borderRadius: 'full',
		pointerEvents: 'none',
		zIndex: 9998,
		mixBlendMode: 'difference',
		transition: 'width 0.2s, height 0.2s'
	})}
	style="left: {trailX}px; top: {trailY}px; transform: translate(-50%, -50%);"
></div>
