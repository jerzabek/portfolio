'use client';

import { useEffect, useRef, useState } from 'react';
import { css } from 'styled-system/css';

export default function CustomCursor() {
	const [hasCursor, setHasCursor] = useState(false);
	const dotRef = useRef<HTMLDivElement>(null);
	const trailRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let cursorX: number | undefined;
		let cursorY: number | undefined;
		let trailX = 0;
		let trailY = 0;
		let frame: number;
		let shown = false;

		const handleMouseMove = (e: MouseEvent) => {
			cursorX = e.clientX;
			cursorY = e.clientY;
			if (!shown) {
				shown = true;
				setHasCursor(true);
			}
			if (dotRef.current) {
				dotRef.current.style.left = `${cursorX}px`;
				dotRef.current.style.top = `${cursorY}px`;
			}
		};

		// Smooth trailing animation
		const animate = () => {
			if (cursorX !== undefined && cursorY !== undefined) {
				trailX += (cursorX - trailX) * 0.15;
				trailY += (cursorY - trailY) * 0.15;
				if (trailRef.current) {
					trailRef.current.style.left = `${trailX}px`;
					trailRef.current.style.top = `${trailY}px`;
				}
			}
			frame = requestAnimationFrame(animate);
		};

		window.addEventListener('mousemove', handleMouseMove);
		frame = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<>
			<style>{'* { cursor: none !important; }'}</style>

			{hasCursor && (
				<>
					{/* Small dot at cursor position */}
					<div
						ref={dotRef}
						className={css({
							hideBelow: 'md',
							position: 'fixed',
							width: '8px',
							height: '8px',
							borderRadius: 'full',
							bg: 'white',
							pointerEvents: 'none',
							zIndex: 9999,
							mixBlendMode: 'difference'
						})}
						style={{ transform: 'translate(-50%, -50%)' }}
					/>

					{/* Trailing circle */}
					<div
						ref={trailRef}
						className={css({
							hideBelow: 'md',
							position: 'fixed',
							width: '40px',
							height: '40px',
							border: '2px solid',
							borderColor: 'white',
							borderRadius: 'full',
							pointerEvents: 'none',
							zIndex: 9998,
							mixBlendMode: 'difference',
							transition: 'width 0.2s, height 0.2s'
						})}
						style={{ transform: 'translate(-50%, -50%)' }}
					/>
				</>
			)}
		</>
	);
}
