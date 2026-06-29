'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	delay?: number;
	direction?: 'up' | 'down' | 'left' | 'right';
}

const variants = {
	up: { y: 40, x: 0 },
	down: { y: -40, x: 0 },
	left: { x: 40, y: 0 },
	right: { x: -40, y: 0 }
};

export default function FadeIn({ children, delay = 0, direction = 'up' }: Props) {
	const offset = variants[direction];

	return (
		<motion.div
			initial={{ opacity: 0, x: offset.x, y: offset.y }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, amount: 0.1, margin: '-100px' }}
			transition={{ type: 'spring', stiffness: 60, damping: 18, delay }}
		>
			{children}
		</motion.div>
	);
}
