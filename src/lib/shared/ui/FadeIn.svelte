<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { Spring } from 'svelte/motion';

	interface Props {
		children?: Snippet;
		delay?: number;
		direction?: 'up' | 'down' | 'left' | 'right';
	}

	let { children, delay = 0, direction = 'up' }: Props = $props();
	let isVisible = $state(false);
	let element: HTMLDivElement;

	const variants = {
		up: { y: 40, x: 0 },
		down: { y: -40, x: 0 },
		left: { x: 40, y: 0 },
		right: { x: -40, y: 0 }
	};

	const offset = variants[direction];

	const opacity = new Spring(0, { stiffness: 0.06, damping: 0.5 });
	const x = new Spring(offset.x, { stiffness: 0.06, damping: 0.5 });
	const y = new Spring(offset.y, { stiffness: 0.06, damping: 0.5 });

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						isVisible = true;
						opacity.set(1);
						x.set(0);
						y.set(0);
					}, delay * 1000);
					observer.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: '-100px' }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	style="opacity: {opacity.current}; transform: translate({x.current}px, {y.current}px);"
>
	{@render children?.()}
</div>
